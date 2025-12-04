const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const fileUpload = require("express-fileupload");

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const port = process.env.PORT || 9191;

// Database connection
connectDB();

// Middleware configuration
const configureMiddleware = () => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.json({ limit: "100mb" }));
  app.use(express.urlencoded({ limit: "100mb", extended: true }));
  app.use(cookieParser());
  
  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
      limits: { fileSize: 100 * 1024 * 1024 },
    })
  );
  
  app.use(
    session({
      secret: crypto.randomBytes(64).toString("hex"),
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  require("./config/passport")(passport);
};

// View engine setup
const configureViews = () => {
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));
  app.use(express.static(path.join(__dirname, "public")));
};

// Route handlers
const configureRoutes = () => {
  // API Routes
  const bookRoutes = require("./routes/bookRoutes");
  const organisationRoutes = require("./routes/organisation");
  const userRoutes = require("./routes/userRoutes");
  const authRoutes = require("./routes/authRoutes");
  const adminRoutes = require("./routes/admin");
  const verifyRoutes = require("./routes/verify");
  const excelRoutes = require("./routes/excelRoutes");
  const authenticateJWT = require("./middleware/authMiddleware");

  app.use("/user", userRoutes);
  app.use("/auth", authRoutes);
  app.use("/admin", adminRoutes);
  app.use("/verify", verifyRoutes);
  app.use("/api/excel", excelRoutes);
  app.use("/api/organisation", organisationRoutes);
  app.use("/ebook", bookRoutes);
  app.use("/api/user", userRoutes);

  // RTS Integration
  app.use("/RTS/public", express.static(path.join(__dirname, "RTS", "public")));
  app.use("/rts", express.static(path.join(__dirname, "RTS", "public")));
  
  app.get("/rts/main", (req, res) => {
    res.sendFile(path.join(__dirname, "RTS", "public", "main.html"));
  });

  // View Routes
  const Organisation = require("./models/Organisation");
  const Book = require("./models/Book");

  app.get("/books", async (req, res) => {
    try {
      const books = await Book.find({});
      res.render("books", { moreBooks: books });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error fetching books");
    }
  });

  app.get("/flipbook", (req, res) => {
    res.render("flipbook", {
      title: "RID Button Flipbook",
      pdfUrl: "/pdf/pdf.pdf",
      downloadUrl: "/images/pdf.rar",
    });
  });

  app.get("/organization-dashboard", authenticateJWT, async (req, res) => {
    try {
      const organization = await Organisation.findOne();
      if (!organization) return res.status(404).send("Organization not found");
      res.render("organizationDashboard", { organization });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

  app.get("/organization-dashboard/:id", authenticateJWT, async (req, res) => {
    try {
      const organisationId = req.params.id;
      const organisation = await Organisation.findById(organisationId);
      if (!organisation)
        return res.status(404).json({ error: "Organization not found" });
      res.render("organization-dashboard", { organisation });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });

  // Static HTML Routes
  const roleMiddleware = (role) => (req, res, next) => {
    if (req.user && req.user.role === role) return next();
    res.redirect("/login");
  };

  app.get("/organisation", authenticateJWT, roleMiddleware("organisation"), (req, res) => {
    res.render("register-org");
  });

  app.get("/teacher", authenticateJWT, roleMiddleware("teacher"), (req, res) => {
    res.sendFile(path.join(__dirname, "public", "teacher.html"));
  });

  app.get("/student", authenticateJWT, roleMiddleware("student"), (req, res) => {
    res.sendFile(path.join(__dirname, "public", "student.html"));
  });

  app.get("/admin", authenticateJWT, roleMiddleware("admin"), (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Admin/admin.html"));
  });

  app.get("/reset-password", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Reset-Password/reset-password.html"));
  });

  app.get("/forgot-password", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Forgot-Password/forgot-password.html"));
  });

  app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Signup/form.html"));
  });

  app.get("/onlineTest", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "component/onlineTest.html"));
  });

  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Login/login.html"));
  });

  app.get("/verify", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Certificate-Verification/verify.html"));
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  app.get("/ebook", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "ebook.html"));
  });

  app.get("/searchResult", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "searchResult.html"));
  });

  app.get("/serverpdf", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "serverpdf.html"));
  });
//=================== Certificate Routes ========================

  const applicationRoutes = require("./routes/applicationRoutes");
app.use("/api", applicationRoutes);

// Add these routes in the static routes section:

app.get("/certificate", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Certificate-Verification/certificate.html"));
});

app.get("/apply-certificate", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Certificate-Verification/Applay-certificate.html"));
});
  //==============================================
  app.get("/get-pdf", (req, res) => {
    const pdfPath = path.join(__dirname, "ebookdata", "azenglish.pdf");
    const pdfStream = fs.createReadStream(pdfPath);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline");
    pdfStream.pipe(res);
  });

  // Logout route
  app.get("/logout", (req, res) => {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) return res.status(500).send("Could not log out.");
        res.redirect("/login");
      });
    } else {
      res.json({ message: "Logged out successfully" });
    }
  });

  // Duration API
  app.get("/api/duration", (req, res) => {
    const duration = process.env.DURATION;
    if (!duration)
      return res.status(500).json({ error: "Duration not set in .env file" });
    res.json({ duration });
  });

  // Catch-all 404
  app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "404/404.html"));
  });
};

// Configure the application
configureMiddleware();
configureViews();
configureRoutes();

// Start Server
app.listen(port, () => {
  console.log(`\n✅ Server is running on http://localhost:${port}`);
});
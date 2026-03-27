import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "4rem auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>

      <p style={{ fontSize: "1.2rem", color: "#718096", marginBottom: "1.5rem" }}>
        ไม่พบหน้าที่คุณต้องการ
      </p>

      <Link
        to="/"
        style={{
          color: "#1e40af",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        ← กลับหน้าหลัก
      </Link>
    </div>
  );
}

export default NotFoundPage;
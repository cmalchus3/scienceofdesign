:root { --font-sans: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial; }
* { box-sizing: border-box; }
html, body { padding: 0; margin: 0; font-family: var(--font-sans); background: #F8FAFC; }
a { color: inherit; text-decoration: none; }

/* Accessible skip link shown only when focused (no JS) */
.skip-link {
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.skip-link:focus {
  left: 16px;
  top: 16px;
  width: auto;
  height: auto;
  z-index: 9999;
  padding: 8px 12px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

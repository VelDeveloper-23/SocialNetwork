let session = new Session();
session = session.getSession();

if (session !== "") {
  alert("Ulogovan si");
} else {
  window.location.href = "/";
}

import NotFoundImg from "../../assets/images/404.jpg";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404- Page not found . please verify the url.</h1>
      <img src={NotFoundImg} alt="Not Found" />
    </div>
  );
}

import logo from "./componnet";
function logo() {
  return (
    <div>
      <img src={require("./component/images/logo.png")} alt="The blog" />
    </div>
  );
}
export default logo;

import "../styles/HeaderComponent.scss";
const HeaderComponent = () => 
{
  return (
    <div>
      <header className="mainheader">
        <a href="#" className="logo">
          Freightify - Data Audit and Update
        </a>
        <ul class="navigation">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Direct Update</a>
          </li>
          <li>
            <a href="#">Task Executor</a>
          </li>
          <li>
            <a href="#">Event Log</a>
          </li>
          <li>
            <a href="#">Operation</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default HeaderComponent;
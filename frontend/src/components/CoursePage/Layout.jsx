import Sidebar from './Sidebar';
import Topbar from './Topbar';
import deviceLogo from '../../assets/logo.png';

function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <Topbar />

      <div className="flex-1 ml-64 p-6">
        {children}
        <div class="device-notification">
          <a class="device-notification--logo" href="#0">
            <img src={deviceLogo} alt="FlexNative Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          </a>
          <p class="device-notification--message">
            Oops! Looks like you're in portrait mode. Flip your device or jump to a bigger screen to enjoy everything <span className="device-notification--highlight1">Flex</span>
            <span className="device-notification--highlight2">Native</span> has in store!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Layout;

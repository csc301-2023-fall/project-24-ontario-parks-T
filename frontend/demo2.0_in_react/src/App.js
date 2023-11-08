import logo from './logo.svg';
import './App.css';

function getAudioPath(location, season) {
    // if(season!="spring"&&season!="summer"&&season!="Autumn"&&season!="Winter"){
    //     season_index="default";
    // }
    // else{
    //     season_index=season;
    // }
    return "background-welcome.mp3";
}

function App() {
  return (
    <div id="body" className="d-flex flex-column flex-grow-1">
    <div id="content" className="d-flex flex-column flex-grow-1">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">AudioQR Management</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown me-3">
                            <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Check Other Season
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                                <li><a className="dropdown-item" href="#">Summer</a></li>
                                <li><a className="dropdown-item" href="#">autumn</a></li>
                                <li><a className="dropdown-item" href="#">Winter</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        
        <main className="d-flex flex-column flex-grow-1">
            
              <div className="music_container d-flex justify-content-center mb-5">

                  <div id="mobile-box" className="justify-content-center">
              
                  <div className="card">
                      <div className="bg-grey hover-overlay ripple" data-mdb-ripple-color="light">
                      <img className="card-img-top " src="park_icon.png"
                          alt="Card image cap"></img>
                      
                          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}>
                              <div className="card-body text-center">
              
                                <h5 className="h5 font-weight-bold">Welcome</h5>
                                    <p className="mb-0">Welcome audio from Ontario Park</p>
                                    {
                                        <audio src={getAudioPath('temp', 'temp')} controls>

                                        Your browser does not support the audio element.
                                        </audio>
                                    }
                              </div>
                          </div>
                      
                      </div>
                    </div>
                  </div>
              </div>
        </main>

                <footer className="text-center py-1 bg-dark text-white">
                <div className="container">
                    <p>&copy; 2023 csc301 G24 All rights reserved.</p>
                </div>
                </footer>
                </div>
                

    <script>
        const dynamicAudio = document.getElementById('dynamicAudio');
        const audioPath = getAudioPath(); // Call your JavaScript function to get file path
        dynamicAudio.src = audioPath; // Set the src attribute dynamically
    </script>
    </div>
  );
}

export default App;

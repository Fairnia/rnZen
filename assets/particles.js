import Particles from 'react-particles-js';


<Particles
  style={styles.particles}
  width = '600px'
  height= '400px'
  params={{
    "particles": {
        "number": {
            "value": 45
        },
        "move": {
          "speed": 2,
        },
        "links": {
          "color": "#ffffff",
          "enable": true,
          "opacity": 0.3,
          "width": 1,
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "mode": "repulse"
            }
        }
    }
}} />

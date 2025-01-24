import './App.css';

function App() {

  return (
    <div>
      <div className="sketchfab-embed-wrapper">
        {' '}
        <iframe
          title="Belldandy en bikini"
          frameBorder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/ae2f02ee709b45da8b424ca4e330630f/embed?ui_theme=dark"
        >
          {' '}
        </iframe>{' '}
        <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
          {' '}
          <a
            href="https://sketchfab.com/3d-models/belldandy-en-bikini-ae2f02ee709b45da8b424ca4e330630f?utm_medium=embed&utm_campaign=share-popup&utm_content=ae2f02ee709b45da8b424ca4e330630f"
            target="_blank"
            rel="nofollow"
            style="font-weight: bold; color: #1CAAD9;"
          >
            {' '}
            Belldandy en bikini{' '}
          </a>{' '}
          by{' '}
          <a
            href="https://sketchfab.com/Salazar_Kane?utm_medium=embed&utm_campaign=share-popup&utm_content=ae2f02ee709b45da8b424ca4e330630f"
            target="_blank"
            rel="nofollow"
            style="font-weight: bold; color: #1CAAD9;"
          >
            {' '}
            Salazar_Kane{' '}
          </a>{' '}
          on{' '}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=ae2f02ee709b45da8b424ca4e330630f"
            target="_blank"
            rel="nofollow"
            style="font-weight: bold; color: #1CAAD9;"
          >
            Sketchfab
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

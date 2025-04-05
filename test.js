


// test.js


// console.log("JavaScript file loaded"); // Log pour vérifier que le fichier JS est chargé

function scrollToSection(menu) {
    console.log("Scrolling to section:", menu); // Log pour vérifier que la fonction est appelée
    var section = document.getElementById(menu);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log("Section not found:", menu);
    }
}

// Simple alert to test if the file is loaded and script works
// alert("JavaScript file is working!");

function afficherMessage() {
    alert("Direction Duck Heaven");
    window.location.href = 'index.html'; // Redirige vers la page du quiz
    document.getElementById(menu).scrollIntoView({ behavior: 'smooth' });
}








document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('myVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const muteUnmuteBtn = document.getElementById('muteUnmuteBtn');

    // Lecture automatique de la vidéo à l'ouverture de la page
    video.play();

    // Redémarrage de la vidéo une fois terminée
    video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
    });

    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    stopBtn.addEventListener('click', () => {
        video.pause();
        video.currentTime = 0;
        playPauseBtn.textContent = 'Play';
    });

    muteUnmuteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        muteUnmuteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
    });
});






// boutons jaunemauve section4
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}
function showSection(sectionId) {
    // Récupérer tous les boutons et retirer la classe "active"
    let buttons = document.querySelectorAll(".tab-button");
    buttons.forEach(button => button.classList.remove("active"));

    // Ajouter la classe "active" au bouton cliqué
    event.currentTarget.classList.add("active");

    // Récupérer le texte de la section "Présentation"
    let textContainer = document.querySelector(".text-container");

    // Ajouter la classe "show" pour l'effet d'apparition
    textContainer.classList.add("show");
}




document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const progressValue = bar.querySelector('.progress-value');
        const progressWidth = bar.getAttribute('data-progress') + '%';
        
        // Anime la largeur de la barre de progression
        bar.style.width = progressWidth;
        
        // Affiche le pourcentage après l'animation
        setTimeout(() => {
            progressValue.style.opacity = 1;
        }, 1500); // Correspond à la durée de l'animation CSS
    });
});




    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.style.display = "none"; // Masquer le loader
    });
















    function showSection(sectionId) {
        // Masquer tous les conteneurs de texte
        const textContainers = document.querySelectorAll('.text-container');
        textContainers.forEach(container => {
            container.classList.remove('active');
        });
    
        // Afficher le conteneur de texte correspondant à l'onglet sélectionné
        const activeContainer = document.getElementById(`${sectionId}-content`);
        if (activeContainer) {
            activeContainer.classList.add('active');
        }
    
        // Mettre à jour l'état actif des boutons
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
    
        const activeButton = document.querySelector(`.tab-button[onclick="showSection('${sectionId}')"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }
    
    // Afficher l'onglet "Présentation" par défaut au chargement de la page
    document.addEventListener("DOMContentLoaded", function () {
        showSection('presentation');
    });





//smoothhhh

  // Initialiser GSAP
gsap.registerPlugin(ScrollTrigger); // ScrollTrigger n'est plus nécessaire ici, mais vous pouvez le garder pour d'autres animations

// Animation pour les boutons de l'onglet
gsap.from(".tab-button", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 0.2, // Délai entre chaque bouton
});

// Animation pour les conteneurs de texte
gsap.from(".text-container", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.8, // Délai entre chaque conteneur
});

// Animation pour le texte à l'intérieur des conteneurs
gsap.from(".text-content", {
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.2, // Délai entre chaque paragraphe
});










































const preload = () => {

    let manager = new THREE.LoadingManager();
    manager.onLoad = function() { 
      const environment = new Environment( typo, particle );
    }
  
    var typo = null;
    const loader = new THREE.FontLoader( manager );
    const font = loader.load('https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json', function ( font ) { typo = font; });
    const particle = new THREE.TextureLoader( manager ).load( 'https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png');
  
  }
  
  if ( document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll))
    preload ();
  else
    document.addEventListener("DOMContentLoaded", preload ); 
  
  class Environment {
  
    constructor( font, particle ){ 
  
      this.font = font;
      this.particle = particle;
      this.container = document.querySelector( '#magic' );
      this.scene = new THREE.Scene();
      this.createCamera();
      this.createRenderer();
      this.setup()
      this.bindEvents();
    }
  
    bindEvents(){
  
      window.addEventListener( 'resize', this.onWindowResize.bind( this ));
      
    }
  
    setup(){ 
  
      this.createParticles = new CreateParticles( this.scene, this.font,             this.particle, this.camera, this.renderer );
    }
  
    render() {
      
       this.createParticles.render()
       this.renderer.render( this.scene, this.camera )
    }
  
    createCamera() {
  
      this.camera = new THREE.PerspectiveCamera( 65, this.container.clientWidth /  this.container.clientHeight, 1, 10000 );
      this.camera.position.set( 0,0, 100 );
  
    }
  
    createRenderer() {
  
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
  
      this.renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2));
  
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.container.appendChild( this.renderer.domElement );
  
      this.renderer.setAnimationLoop(() => { this.render() })
  
    }
  
    onWindowResize(){
  
      this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
  
    }
  }
  
  class CreateParticles {
      
      constructor( scene, font, particleImg, camera, renderer ) {
      
          this.scene = scene;
          this.font = font;
          this.particleImg = particleImg;
          this.camera = camera;
          this.renderer = renderer;
          
          this.raycaster = new THREE.Raycaster();
          this.mouse = new THREE.Vector2(-200, 200);
          
          this.colorChange = new THREE.Color();
  
          this.buttom = false;
  
          this.data = {
  
              text: 'ESTEBAN MATEO',
              amount: 1500,
              particleSize: 1,
              particleColor: 0xffffff,
              textSize: 16,
              area: 250,
              ease: .05,
          }
  
          this.setup();
          this.bindEvents();
  
      }
  
  
      setup(){
  
          const geometry = new THREE.PlaneGeometry( this.visibleWidthAtZDepth( 100, this.camera ), this.visibleHeightAtZDepth( 100, this.camera ));
          const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, transparent: true } );
          this.planeArea = new THREE.Mesh( geometry, material );
          this.planeArea.visible = false;
          this.createText();
  
      }
  
      bindEvents() {
  
          document.addEventListener( 'mousedown', this.onMouseDown.bind( this ));
          document.addEventListener( 'mousemove', this.onMouseMove.bind( this ));
          document.addEventListener( 'mouseup', this.onMouseUp.bind( this ));
          
      }
  
      onMouseDown(){
          
          this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
          this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  
          const vector = new THREE.Vector3( this.mouse.x, this.mouse.y, 0.5);
          vector.unproject( this.camera );
          const dir = vector.sub( this.camera.position ).normalize();
          const distance = - this.camera.position.z / dir.z;
          this.currenPosition = this.camera.position.clone().add( dir.multiplyScalar( distance ) );
          
          const pos = this.particles.geometry.attributes.position;
          this.buttom = true;
          this.data.ease = .01;
          
      }
  
      onMouseUp(){
  
          this.buttom = false;
          this.data.ease = .05;
      }
  
      onMouseMove( ) { 
  
          this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
          this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  
      }
  
      render( level ){ 
  
          const time = ((.001 * performance.now())%12)/12;
          const zigzagTime = (1 + (Math.sin( time * 2 * Math.PI )))/6;
  
          this.raycaster.setFromCamera( this.mouse, this.camera );
  
          const intersects = this.raycaster.intersectObject( this.planeArea );
  
          if ( intersects.length > 0 ) {
  
              const pos = this.particles.geometry.attributes.position;
              const copy = this.geometryCopy.attributes.position;
              const coulors = this.particles.geometry.attributes.customColor;
              const size = this.particles.geometry.attributes.size;
  
              const mx = intersects[ 0 ].point.x;
              const my = intersects[ 0 ].point.y;
              const mz = intersects[ 0 ].point.z;
  
              for ( var i = 0, l = pos.count; i < l; i++) {
  
                  const initX = copy.getX(i);
                  const initY = copy.getY(i);
                  const initZ = copy.getZ(i);
  
                  let px = pos.getX(i);
                  let py = pos.getY(i);
                  let pz = pos.getZ(i);
  
                  this.colorChange.setHSL( .5, 1 , 1 )
                  coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
                  coulors.needsUpdate = true;
  
                  size.array[ i ]  = this.data.particleSize;
                  size.needsUpdate = true;
  
                  let dx = mx - px;
                  let dy = my - py;
                  const dz = mz - pz;
  
                  const mouseDistance = this.distance( mx, my, px, py )
                  let d = ( dx = mx - px ) * dx + ( dy = my - py ) * dy;
                  const f = - this.data.area/d;
  
                  if( this.buttom ){ 
  
                      const t = Math.atan2( dy, dx );
                      px -= f * Math.cos( t );
                      py -= f * Math.sin( t );
  
                      this.colorChange.setHSL( .5 + zigzagTime, 1.0 , .5 )
                      coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
                      coulors.needsUpdate = true;
  
                      if ((px > (initX + 70)) || ( px < (initX - 70)) || (py > (initY + 70) || ( py < (initY - 70)))){
  
                          this.colorChange.setHSL( .15, 1.0 , .5 )
                          coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
                          coulors.needsUpdate = true;
  
                      }
  
                  }else{
                  
                      if( mouseDistance < this.data.area ){
  
                          if(i%5==0){
  
                              const t = Math.atan2( dy, dx );
                              px -= .03 * Math.cos( t );
                              py -= .03 * Math.sin( t );
  
                              this.colorChange.setHSL( .15 , 1.0 , .5 )
                              coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
                              coulors.needsUpdate = true;
  
                              size.array[ i ]  =  this.data.particleSize /1.2;
                              size.needsUpdate = true;
  
                          }else{
  
                              const t = Math.atan2( dy, dx );
                              px += f * Math.cos( t );
                              py += f * Math.sin( t );
  
                              pos.setXYZ( i, px, py, pz );
                              pos.needsUpdate = true;
  
                              size.array[ i ]  = this.data.particleSize * 1.3 ;
                              size.needsUpdate = true;
                          }
  
                          if ((px > (initX + 10)) || ( px < (initX - 10)) || (py > (initY + 10) || ( py < (initY - 10)))){
  
                              this.colorChange.setHSL( .15, 1.0 , .5 )
                              coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
                              coulors.needsUpdate = true;
  
                              size.array[ i ]  = this.data.particleSize /1.8;
                              size.needsUpdate = true;
  
                          }
                      }
  
                  }
  
                  px += ( initX  - px ) * this.data.ease;
                  py += ( initY  - py ) * this.data.ease;
                  pz += ( initZ  - pz ) * this.data.ease;
  
                  pos.setXYZ( i, px, py, pz );
                  pos.needsUpdate = true;
  
              }
          }
      }
  
      createText(){ 
  
          let thePoints = [];
  
          let shapes = this.font.generateShapes( this.data.text , this.data.textSize  );
          let geometry = new THREE.ShapeGeometry( shapes );
          geometry.computeBoundingBox();
      
          const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
          const yMid =  (geometry.boundingBox.max.y - geometry.boundingBox.min.y)/2.85;
  
          geometry.center();
  
          let holeShapes = [];
  
          for ( let q = 0; q < shapes.length; q ++ ) {
  
              let shape = shapes[ q ];
  
              if ( shape.holes && shape.holes.length > 0 ) {
  
                  for ( let  j = 0; j < shape.holes.length; j ++ ) {
  
                      let  hole = shape.holes[ j ];
                      holeShapes.push( hole );
                  }
              }
  
          }
          shapes.push.apply( shapes, holeShapes );
  
          let colors = [];
          let sizes = [];
                      
          for ( let  x = 0; x < shapes.length; x ++ ) {
  
              let shape = shapes[ x ];
  
              const amountPoints = ( shape.type == 'Path') ? this.data.amount/2 : this.data.amount;
  
              let points = shape.getSpacedPoints( amountPoints ) ;
  
              points.forEach( ( element, z ) => {
                          
                  const a = new THREE.Vector3( element.x, element.y, 0 );
                  thePoints.push( a );
                  colors.push( this.colorChange.r, this.colorChange.g, this.colorChange.b);
                  sizes.push( 1 )
  
                  });
          }
  
          let geoParticles = new THREE.BufferGeometry().setFromPoints( thePoints );
          geoParticles.translate( xMid, yMid, 0 );
                  
          geoParticles.setAttribute( 'customColor', new THREE.Float32BufferAttribute( colors, 3 ) );
          geoParticles.setAttribute( 'size', new THREE.Float32BufferAttribute( sizes, 1) );
  
          const material = new THREE.ShaderMaterial( {
  
              uniforms: {
                  color: { value: new THREE.Color( 0xffffff ) },
                  pointTexture: { value: this.particleImg }
              },
              vertexShader: document.getElementById( 'vertexshader' ).textContent,
              fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
  
              blending: THREE.AdditiveBlending,
              depthTest: false,
              transparent: true,
          } );
  
          this.particles = new THREE.Points( geoParticles, material );
          this.scene.add( this.particles );
  
          this.geometryCopy = new THREE.BufferGeometry();
          this.geometryCopy.copy( this.particles.geometry );
          
      }
  
      visibleHeightAtZDepth ( depth, camera ) {
  
        const cameraOffset = camera.position.z;
        if ( depth < cameraOffset ) depth -= cameraOffset;
        else depth += cameraOffset;
  
        const vFOV = camera.fov * Math.PI / 180; 
  
        return 2 * Math.tan( vFOV / 2 ) * Math.abs( depth );
      }
  
      visibleWidthAtZDepth( depth, camera ) {
  
        const height = this.visibleHeightAtZDepth( depth, camera );
        return height * camera.aspect;
  
      }
  
      distance (x1, y1, x2, y2){
         
          return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
      }
  }
  





















  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log("Section not found:", sectionId);
    }
}















const deg = (a) => (Math.PI / 180) * a;
const rand = (v1, v2) => Math.floor(v1 + Math.random() * (v2 - v1));

const opt = {
    particles: window.innerWidth > 500 ? 1000 : 500,
    noiseScale: 0.009,
    angle: Math.PI / 180 * -90,
    h1: rand(0, 360),
    h2: rand(0, 360),
    s1: rand(20, 90),
    s2: rand(20, 90),
    l1: rand(30, 80),
    l2: rand(30, 80),
    strokeWeight: 1.2,
    tail: 82,
};

let Particles = [];
let time = 0;

document.body.addEventListener("click", () => {
    opt.h1 = rand(0, 360);
    opt.h2 = rand(0, 360);
    opt.s1 = rand(20, 90);
    opt.s2 = rand(20, 90);
    opt.l1 = rand(30, 80);
    opt.l2 = rand(30, 80);
    opt.angle += deg(rand(60, 60)) * (Math.random() > 0.5 ? 1 : -1);

    for (let p of Particles) {
        p.randomize();
    }
});

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.lx = x;
        this.ly = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.hueSemen = Math.random();
        this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
        this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
        this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
        this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
    }

    randomize() {
        this.hueSemen = Math.random();
        this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
        this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
        this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
        this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
    }

    update() {
        this.follow();
        this.vx += this.ax;
        this.vy += this.ay;

        let p = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        let a = Math.atan2(this.vy, this.vx);
        let m = Math.min(this.maxSpeed, p);
        this.vx = Math.cos(a) * m;
        this.vy = Math.sin(a) * m;

        this.x += this.vx;
        this.y += this.vy;
        this.ax = 0;
        this.ay = 0;

        this.edges();
    }

    follow() {
        let angle = (noise(this.x * opt.noiseScale, this.y * opt.noiseScale, time * opt.noiseScale)) * Math.PI * 0.5 + opt.angle;
        this.ax += Math.cos(angle);
        this.ay += Math.sin(angle);
    }

    updatePrev() {
        this.lx = this.x;
        this.ly = this.y;
    }

    edges() {
        if (this.x < 0) {
            this.x = width;
            this.updatePrev();
        }
        if (this.x > width) {
            this.x = 0;
            this.updatePrev();
        }
        if (this.y < 0) {
            this.y = height;
            this.updatePrev();
        }
        if (this.y > height) {
            this.y = 0;
            this.updatePrev();
        }
    }

    render() {
        stroke(`hsla(${this.hue}, ${this.sat}%, ${this.light}%, .5)`);
        line(this.x, this.y, this.lx, this.ly);
        this.updatePrev();
    }
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("section-7"); // Ajoute le canvas à la section 7
    for (let i = 0; i < opt.particles; i++) {
        Particles.push(new Particle(Math.random() * width, Math.random() * height));
    }
    strokeWeight(opt.strokeWeight);
}

function draw() {
    time++;
    background(0, 100 - opt.tail);

    for (let p of Particles) {
        p.update();
        p.render();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



















































































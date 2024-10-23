let frame = 1;
    let walkingUp = false;
    let walkingDown = false;
    let walkingLeft = false;
    let walkingRight = false;
    let alreadyWalkingUp = false;
    let alreadyWalkingDown = false;
    let alreadyWalkingLeft = false;
    let alreadyWalkingRight = false;
    let positionX = 0;
    let positionY = 0;
    let movementSpeed = 2;
    let animationInterval, walkingIntervalUp, walkingIntervalDown, walkingIntervalRight, walkingIntervalLeft;

    // W
    document.addEventListener('keydown', function(event) {
      if (event.key === 's') {
        walking_down();
        //console.log(`walking down`);
      }
    });

    // Walkinga up
    document.addEventListener('keydown', function(event) {
      if (event.key === 'w') {
        walking_up();
        //console.log(`walking up`);
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'a') {
        walking_left();
        //console.log(`walking left`);
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'd') {
        walking_right();
        //console.log(`walking right`);
      }
    });

    
    document.addEventListener('keyup', function(event) {
      if (event.key === 's' || event.key === 'w' || event.key === 'a' || event.key === 'd') {
        stop_walking();
        console.log(`stopped walking`);
      }
    });

    function walking_down() {
      
      if (walkingUp === true) {
        clearInterval(walkingIntervalUp);
        walkingUp = false;
      }
      if (walkingLeft === true) {
        clearInterval(walkingIntervalLeft);
        walkingLeft = false;
      }
      if (walkingRight === true) {
        clearInterval(walkingIntervalRight);
        walkingRight = false;
      }

      walkingDown = true;
      if (!alreadyWalkingDown) {
        alreadyWalkingDown = true;
        if(alreadyWalkingUp){ alreadyWalkingUp = false;clearInterval(walkingIntervalUp);clearInterval(animationInterval);}
        if(alreadyWalkingLeft){ alreadyWalkingLeft = false;clearInterval(walkingIntervalLeft);clearInterval(animationInterval);}
        if(alreadyWalkingRight){ alreadyWalkingRight=false;clearInterval(walkingIntervalRight);clearInterval(animationInterval);}
        
        animationInterval = setInterval(function() {
          frame++;
          document.getElementById('character').src = `walk_frame${frame}.png`;
          if (frame === 4) frame = 1;
        }, 100);

        
        walkingIntervalDown = setInterval(function() {
          positionY += movementSpeed; 
          document.getElementById('character').style.top = `${positionY}px`;
          console.log('moving down');
        }, 16); 
      }
    }

    function walking_up() {
      
      if (walkingLeft === true) {
        clearInterval(walkingIntervalLeft);
        walkingLeft = false;
      }
      if (walkingDown === true) {
        clearInterval(walkingIntervalDown);
        walkingDown = false;
      }
      if (walkingRight === true) {
        clearInterval(walkingIntervalRight);
        walkingRight = false;
      }

      walkingUp = true;
      if (!alreadyWalkingUp) {
        alreadyWalkingUp = true;
        if(alreadyWalkingLeft){ alreadyWalkingLeft = false;clearInterval(walkingIntervalLeft);clearInterval(animationInterval);}
        if(alreadyWalkingDown){ alreadyWalkingDown = false;clearInterval(walkingIntervalDown);clearInterval(animationInterval);}
        if(alreadyWalkingRight){ alreadyWalkingRight=false;clearInterval(walkingIntervalRight);clearInterval(animationInterval);}
        
        animationInterval = setInterval(function() {
          frame++;
          document.getElementById('character').src = `walk_frame${frame}.png`;
          if (frame === 4) frame = 1;
        }, 100);

        
        walkingIntervalLeft = setInterval(function() {
          positionY -= movementSpeed; 
          document.getElementById('character').style.top = `${positionY}px`;
          console.log('moving up');
        }, 16); 
      }
    }

    function walking_left() {
      
      if (walkingUp === true) {
        clearInterval(walkingIntervalUp);
        walkingUp = false;
      }
      if (walkingDown === true) {
        clearInterval(walkingIntervalDown);
        walkingDown = false;
      }
      if (walkingRight === true) {
        clearInterval(walkingIntervalRight);
        walkingRight = false;
      }

      walkingLeft = true;
      if (!alreadyWalkingLeft) {
        alreadyWalkingLeft = true;
        if(alreadyWalkingUp){ alreadyWalkingUp = false;clearInterval(walkingIntervalUp);clearInterval(animationInterval);}
        if(alreadyWalkingDown){ alreadyWalkingDown = false;clearInterval(walkingIntervalDown);clearInterval(animationInterval);}
        if(alreadyWalkingRight){ alreadyWalkingRight=false;clearInterval(walkingIntervalRight);clearInterval(animationInterval);}
        
        animationInterval = setInterval(function() {
          frame++;
          document.getElementById('character').src = `walk_frame${frame}.png`;
          if (frame === 4) frame = 1;
        }, 100);

        
        walkingIntervalLeft = setInterval(function() {
          positionX -= movementSpeed; 
          document.getElementById('character').style.left = `${positionX}px`;
          console.log('moving left');
        }, 16); 
      }
    }
    
    function walking_right() {
      
      if (walkingUp === true) {
        clearInterval(walkingIntervalUp);
        walkingUp = false;
      }
      if (walkingDown === true) {
        clearInterval(walkingIntervalDown);
        walkingDown = false;
      }
      if (walkingLeft === true) {
        clearInterval(walkingIntervalLeft);
        walkingLeft = false;
      }

      walkingRight = true;
      if (!alreadyWalkingRight) {
        alreadyWalkingRight = true;
        if(alreadyWalkingUp){ alreadyWalkingUp = false;clearInterval(walkingIntervalUp);clearInterval(animationInterval);}
        if(alreadyWalkingDown){ alreadyWalkingDown = false;clearInterval(walkingIntervalDown);clearInterval(animationInterval);}
        if(alreadyWalkingLeft){ alreadyWalkingLeft=false;clearInterval(walkingIntervalLeft);clearInterval(animationInterval);}
        
        animationInterval = setInterval(function() {
          frame++;
          document.getElementById('character').src = `walk_frame${frame}.png`;
          if (frame === 4) frame = 1;
        }, 100);

        
        walkingIntervalRight = setInterval(function() {
          positionX += movementSpeed; 
          document.getElementById('character').style.left = `${positionX}px`;
          console.log('moving right');
        }, 16); 
      }
    }

    function stop_walking() {
      walkingDown = false;
      walkingUp = false;
      walkingLeft = false;
      walkingRight = false;
      frame = 1;
      
      
      
      

     
      clearInterval(animationInterval);
      clearInterval(walkingIntervalUp);
      alreadyWalkingUp = false;
      clearInterval(walkingIntervalDown);
      alreadyWalkingDown = false;
      clearInterval(walkingIntervalLeft);
      alreadyWalkingLeft = false;
      clearInterval(walkingIntervalRight);
      alreadyWalkingRight = false;

      
      document.getElementById('character').src = `walk_frame1.png`;
      console.log('cleared');
    }
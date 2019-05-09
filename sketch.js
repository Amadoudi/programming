function setup() {
    createCanvas(800,800); 
}

function draw() {

    stroke(1);
    ellipse(400, 400, 300, 300)
    
    // Top Right
    if(mouseX > width/2){
        // Face
        fill('red')
        ellipse(400, 400, 300, 300)



        // Mouth
        fill('black')
        ellipse(400, 470 ,130, 100)
                // Eyes
        ellipse(350, 340, 80, 80)
        ellipse(450, 340, 80, 80)

        // Mouth
        fill('red')
        noStroke();
        ellipse(400, 400, 300, 100)
        
        
        
        
        
    // Top Left
    } else if(mouseX < width/2) {
        fill('green')
        
        
        ellipse(400, 400, 300, 300)



        // Mouth
        fill('black')
        ellipse(400, 470 ,130, 100)
        // Eyes
        ellipse(350, 340, 80, 80)
        ellipse(450, 340, 80, 80)

        // Mouth
        fill('green')
        noStroke();
        ellipse(400, 500, 130, 80)
        
    }
}


function mousePressed() {

    var r = random(255);
    var g = random(255);
    var b = random(255);
    
    background(r, g, b);

}
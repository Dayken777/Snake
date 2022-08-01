    document.getElementById('title-start-game').onclick = () => {
        document.getElementById('title-start-game').style.display = "none";
        let screen = document.getElementById('screen-area');
        screen.style.cssText = `
            background-color:black;
            transition-duration: .5s;
        `;
        let canvas = document.getElementById("game");
        let ctx = canvas.getContext("2d");
    
        const ground = new Image(); // Создание объекта
        ground.src = "../img/background-game.png"; // Указываем нужное изображение
    
        const foodImg = new Image(); // Создание объекта
        foodImg.src = "../img/egg.png"; // Указываем нужное изображение
    
        let box = 25.26315789473684;
    
        let food = {
            x: Math.floor(Math.random() * 17 +1) * box,
            y: Math.floor(Math.random() * 15 +3) * box,
        };
    
        let snake = [];
        snake[0] = {
            x: 9 * box,
            y: 10 * box,
        };
    
        document.addEventListener("keydown", direction);
    
        let dir;
    
        function direction(event) {
            if(event.keyCode == 37 && dir!="rigth")
                dir = "left";
            else if(event.keyCode == 38 && dir!="down")
                dir = "up";
            else if(event.keyCode == 39 && dir!="left")
                dir = "rigth";
            else if(event.keyCode == 40 && dir!="up")
                dir = "down";
        }
    
        let score = 0;

        function eatTail(head, arr) {
            for(let i = 0; i <arr.length; i++){
                if(head.x == arr[i].x && head.y == arr[i].y)
                {
                    clearInterval(game);
                }
            }
        }
    
        function draw() {
            ctx.drawImage(ground,0, 0);
            ctx.drawImage(foodImg, food.x, food.y);
    
            for(let i = 0; i< snake.length; i++)
            {
                ctx.fillStyle = i == 0? "green" : "yellow";
                ctx.fillRect(snake[i].x, snake[i].y, box, box);
            }
            ctx.fillStyle = "white";
            ctx.font ="50px Chakra Petch";
            ctx.fillText(score, box * 2.5, box * 1.8);
    
            let snakeX = snake[0].x;
            let snakeY = snake[0].y;

            if(snakeX.toFixed() == food.x.toFixed() && snakeY.toFixed() == food.y.toFixed()){
               
                score++;
                food = {
                    x: Math.floor(Math.random() * 17 +1) * box,
                    y: Math.floor(Math.random() * 15 +3) * box,
                };
            }
            else{
                snake.pop();
            }

            if(snakeX <= box - 1 || snakeX > box * 17 
                || snakeY <= 2 * box || snakeY > box * 17)
                clearInterval(game);
            
            if(dir == "left") 
                snakeX -= box;
            if(dir == "rigth") 
                snakeX += box;
            if(dir == "up") 
                snakeY -= box;
            if(dir == "down") 
                snakeY += box;
    
            let newHead = {
                x: snakeX,
                y: snakeY,
            };
            
            eatTail(newHead, snake);
            snake.unshift(newHead);
        }
    
        let game = setInterval(draw, 100); // Вызов функции из вне
    };

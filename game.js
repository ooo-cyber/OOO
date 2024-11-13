let player = document.getElementById('player');
let obstacle = document.getElementById('obstacle');
let scoreElement = document.getElementById('score');
let bgMusic = document.getElementById('bg-music');
let score = 0;
let jumping = false;
let gameOver = false;

// 播放背景音乐
bgMusic.play();

// 控制跳跃
document.addEventListener('keydown', function(event) {
if (event.code === 'Space' && !jumping && !gameOver) {
jump();
}
});

function jump() {
jumping = true;
let jumpHeight = 0;
let jumpInterval = setInterval(function() {
if (jumpHeight >= 150) {
clearInterval(jumpInterval);
let fallInterval = setInterval(function() {
if (jumpHeight <= 0) {
clearInterval(fallInterval);
jumping = false;
} else {
jumpHeight -= 10;
player.style.bottom = jumpHeight + 'px';
}
}, 20);
} else {
jumpHeight += 10;
player.style.bottom = jumpHeight + 'px';
}
}, 20);
}

// 检查碰撞
let checkCollision = setInterval(function() {
let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));
let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));

// 如果障碍物距离足够近且玩家没有跳起来，则游戏结束
if (obstacleLeft > 750 && obstacleLeft < 800 && playerBottom <= 50) {
alert('Game Over! Your Score: ' + score);
gameOver = true;
clearInterval(checkCollision);
bgMusic.pause();
obstacle.style.animation = 'none';
}

// 更新得分
if (!gameOver) {
score++;
scoreElement.textContent = score;
}
}, 100);
未选择文件

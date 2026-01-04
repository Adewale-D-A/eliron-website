// @ts-nocheck - may need to be at the start of file
"use client";

import { cn } from "@/app/_utils/cn";
import { useEffect, useRef } from "react";
const imageString = "data:image/png;base64,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"

export default function ParticleAnimation({className}) {
  const canvasRef = useRef();

  const handleCanvasGraphics = () => {
    try {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const base_image = new Image();
      base_image.src = imageString;
      // canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      const topDeviation = canvas.offsetTop;
      const leftDeviation = canvas.offsetLeft;

      class Particle {
        constructor(effect, x, y, colour) {
          this.effect = effect;
          this.x = x; //Math.random() * this.effect.canvasWidth;
          this.y = y; //change this to alter the position of entering animation
          this.color = colour;
          this.originX = x;
          this.originY = y;
          this.size = this.effect.gap;
          this.dx = 0;
          this.dy = 0;
          this.vx = 0; //horizontal speed
          this.vy = 0; //vertical speed
          this.force = 0;
          this.angle = 0;
          this.distance = 0;
          this.friction = Math.random() * 0.6 + 0.15;
          this.ease = Math.random() * 0.1 + 0.005;
        }
        draw() {
          this.effect.context.fillStyle = this.color;
          this.effect.context.fillRect(this.x, this.y, this.size, this.size);
        }
        update() {
          this.dx = this.effect.mouse.x - this.x;
          this.dy = this.effect.mouse.y - this.y;
          this.distance = this.dx * this.dx + this.dy * this.dy;
          this.force = -this.effect.mouse.radius / this.distance;

          if (this.distance < this.effect.mouse.radius) {
            this.angle = Math.atan2(this.dy, this.dx);
            this.vx += this.force * Math.cos(this.angle);
            this.vy += this.force * Math.sin(this.angle);
          }
          this.x +=
            (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
          this.y +=
            (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
        }
      }
      class Effect {
        constructor(context, canvasWidth, canvasHeight, isImage) {
          this.context = context;
          this.canvasWidth = canvasWidth;
          this.canvasHeight = canvasHeight;
          this.isImage = isImage;
          this.textX = canvasWidth / 2;
          this.textY = canvasHeight / 2;
          this.fontSize = 200;
          this.lineHeight = this.fontSize * 0.8;
          this.maxTextWidth = this.canvasWidth * 0.8;

          //particle text
          this.particles = [];
          this.gap = this.isImage ? 7 : 3;
          this.mouse = {
            radius: 10000, //change what radius the particles are displaced
            x: 0,
            y: 0,
          };
          //get the current position of the mouse and subtract deviation from coordinate (0,0) position
          window.addEventListener("mousemove", (e) => {
            this.mouse.x = e.x - leftDeviation;
            this.mouse.y = e.y - topDeviation;
          });
        }
        wrapText(text) {
          if (this.isImage) {
            base_image.onload = () => {
              this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
              this.context.drawImage(
                base_image,
                0,
                0,
                this.canvasWidth,
                this.canvasHeight
              );
              this.convertToParticles();
            };
          } else {
            this.context.fillStyle = "blue";
            this.context.stokeStyle = "orangered";
            this.context.font = `${this.fontSize}px Arial`;
            this.context.textAlign = "center";
            this.context.textBaseline = "middle";
            this.context.lineWidth = 3;

            //break text into individual lines
            let linesArray = [];
            let words = text.split(" ");
            let lineCounter = 0;
            let line = "";
            for (let i = 0; i < words.length; i++) {
              let testLine = line + words[i] + " ";
              if (
                this.context.measureText(testLine).width > this.maxTextWidth
              ) {
                line = words[i] + " ";
                lineCounter++;
              } else {
                line = testLine;
              }
              linesArray[lineCounter] = line;
            }
            let textHeight = this.lineHeight * lineCounter;
            this.textY = this.canvasHeight / 2 - textHeight / 2;
            linesArray.forEach((el, index) => {
              this.context.fillText(
                el,
                this.textX,
                this.textY + index * this.lineHeight
              );
            });
            this.convertToParticles();
          }
        }
        convertToParticles() {
          this.particles = [];
          //this function scans the canvas to extract the image data
          const pixels = this.context.getImageData(
            0,
            0,
            this.canvasWidth,
            this.canvasHeight
          ).data;
          this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
          for (let y = 0; y < this.canvasHeight; y += this.gap) {
            for (let x = 0; x < this.canvasWidth; x += this.gap) {
              const index = (y * this.canvasWidth + x) * 4;
              const alpha = pixels[index + 3];
              if (alpha > 0) {
                const red = pixels[index];
                const green = pixels[index + 1];
                const blue = pixels[index + 2];
                const colour = `rgb(${red},${green},${blue})`;
                this.particles.push(new Particle(this, x, y, colour));
              }
            }
          }
        }
        render() {
          this.particles.forEach((particle) => {
            particle.update();
            particle.draw();
          });
        }
      }

      const effect = new Effect(ctx, canvas.width, canvas.height, true);
      effect.wrapText("MindWalks");
      effect.render();
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.render();
        requestAnimationFrame(animate);
      }
      animate();
    } catch (error) {}
  };

  useEffect(() => {
    handleCanvasGraphics();
  }, [canvasRef]);

  return (
    <div className={cn("w-full h-full", className)}>
      <canvas className="w-full h-full z-10" ref={canvasRef} id="canvas_id" />
    </div>
  );
}

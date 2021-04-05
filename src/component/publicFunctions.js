export function addClass(el ,className){
    if(el.classList){
        el.classList.add(className);
    }
}

export function removeClass(el ,className){
    if(el.classList){
        el.classList.remove(className);
    }
}


export var smoothCounting = function(element ,time) {
    this.element = document.querySelector(element);
    this.time = time;
    this.max = parseInt(this.element.innerHTML);
    // number of milliseconds required for one frame of the requestAnimationFrame
    this.msn = 1000 / 60;
    this.num = this.time / this.msn;
    this.adder = this.max / this.num;
    this.counter = 0;

    this.count = ()=>{
        if(Math.floor(this.counter) < this.max - this.adder * 2){
            requestAnimationFrame(this.count);
        }
        this.counter += this.adder;
        if(this.adder < 1 || this.counter > this.max){
            this.element.innerHTML = Math.floor(this.counter);
        }else{
            this.element.innerHTML = Math.ceil(this.counter);
        }
    }
    this.count();
}
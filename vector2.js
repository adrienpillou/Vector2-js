class Vector2{

    constructor(x, y){
        this.x = x || 0;
        this.y = y || 0;
    }

    static up = new Vector2(0, -1);
    static down = new Vector2(0, 1);
    static right = new Vector2(1, 0);
    static left = new Vector2(-1, 0);
    static zero = new Vector2(0, 0);
    static one = new Vector2(1, 1);

    set(x, y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return "("+ this.x + ", " + this.y + ")";
    }

    length(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    normalized(){
        let length = this.length();
        return new Vector2(this.x/length, this.y/length);
    }

    normalize(){
        let length = this.length();
        this.x = this.x/length;
        this.y = this.y/length;
    }

    dot(v){
        return this.x*v.x + this.y*v.y;
    }

    add(v){
        return new Vector2(this.x+v.x, this.y+v.y);
    }

    sub(v){
        return new Vector2(this.x-v.x, this.y-v.y);
    }

    mult(s){
        if(!s instanceof Vector2)
            return new Vector2(this.x*s, this.y*s);
    }

    div(s){
        if (!s instanceof Vector2)
            return new Vector2(this.x/v.x, this.y/v.y);
    }

    copy(){
        return new Vector2(this.x, this.y);
    }
}
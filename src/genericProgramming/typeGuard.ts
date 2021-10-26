class Bird {
    fly () {
        console.log('fly to the sky')
    }
}

class Fish {
    swim() {
        console.log('I can swim')
    }
}

const flyOrSwim = (o : Bird | Fish): void => {
    if(o instanceof Bird){
        (o as Bird).fly();
        (<Bird>o).fly()
    }
    else if (o instanceof Fish){
        (o as Fish).swim();
        (<Fish>o).swim()
    }
}

[new Bird, new Fish].forEach(flyOrSwim)

// 커스텀 타입 가드
const isFlyable = (o : Bird | Fish) : o is Bird => {
    return o instanceof Bird
}
const isSwimming = (o : Bird | Fish) : o is Fish => {
    return o instanceof Fish
}

const swimOrFly = (o : Fish | Bird): void => {
    if(isFlyable(o)){
        (o as Bird).fly();
        (<Bird>o).fly()
        o.fly()
    }
    else if (isSwimming(o)){
        (o as Fish).swim();
        (<Fish>o).swim()
        o.swim()
    }
}

[new Bird, new Fish].forEach(swimOrFly)
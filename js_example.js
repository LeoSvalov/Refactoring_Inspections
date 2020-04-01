class SomeClass{
    foo():void{
        bar();
        baz();
    }
    bar():void{
        baz();
    }

    baz(some_arg: string = "BuzzLightyear"):void{}
}
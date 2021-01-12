while (true) {
    console.log("sound level" + input.soundLevel())
    if (input.soundLevel() > 120) {
        light.setAll(light.rgb(23, 5, 90))
    } else {
        light.setAll(light.rgb(0, 0, 0))
    }
    
}

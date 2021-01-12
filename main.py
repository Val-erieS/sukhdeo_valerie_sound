while True:
    print("sound level" + input.sound_level())
    if input.sound_level() > 120:
        light.set_all(light.rgb(23,5,90))
    else:
        light.set_all(light.rgb(0,0,0))

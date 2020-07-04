<template>
    <div>
        <carousel
            :per-page="1"
            :mouse-drag="false"
            :autoplay="true"
            :mouseDrag="true"
            :loop="true"
            :autoplayHoverPause="true"
        >
            <slide>
                <img :src="image1" alt="All inclusive" />
            </slide>
            <slide>
                <img :src="image2" alt="Qu'est-ce qu'on a fait au Bon Dieu" />
            </slide>
            <slide>
                <img :src="image3" alt="La favorite" />
            </slide>
            <slide>
                <img :src="image4" alt="Les invisibles" />
            </slide>
            <slide>
                <img :src="image5" alt="Sang froid" />
            </slide>
            <slide>
                <img :src="image6" alt="A star is born" />
            </slide>
        </carousel>
    </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import Slider1 from "../../assets/Slider/all.jpg";
import Slider2 from "../../assets/Slider/dieu.jpg";
import Slider3 from "../../assets/Slider/fa.jpg";
import Slider4 from "../../assets/Slider/invisible.jpg";
import Slider5 from "../../assets/Slider/sang.jpg";
import Slider6 from "../../assets/Slider/star.jpg";
export default {
    name: "Slider",
    data() {
        return {
            image1: Slider1,
            image2: Slider2,
            image3: Slider3,
            image4: Slider4,
            image5: Slider5,
            image6: Slider6,
        };
    },
    components: {
        Carousel,
        Slide,
    },
};
</script>
<style src="./Slider.css"></style>

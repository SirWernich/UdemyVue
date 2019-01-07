<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">fade</option>
                    <option value="slide">slide</option>
                </select>
                <br>
                <br>
                <button class="btn btn-primary" @click="show = !show">Show alert</button>
                <br>
                <br>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">this is some info</div>
                </transition>
                <transition :name="alertAnimation" type="animation">
                    <div class="alert alert-info" v-if="show">this is some info</div>
                </transition>

                <transition
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated tada"
                >
                    <div class="alert alert-info" v-if="show">this is some info</div>
                </transition>

                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">this is some info</div>
                    <div class="alert alert-warning" v-else key="warning">this is some warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">load / remove element</button>
                <br>
                <br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"
                >
                    <div
                        style="width: 300px; height: 100px; background-color: lightgreen;"
                        v-if="load"
                    ></div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="toggleComponent">toggle components</button>
                <br>
                <br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="addItem">add item</button>
                <br>
                <br>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li
                            class="list-group-item"
                            v-for="(number, idx) in numbers"
                            :key="number"
                            @click="removeItem(idx)"
                            style="cursor: pointer"
                        >{{ number }}</li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import DangerAlert from "./DangerAlert.vue";
import SuccessAlert from "./SuccessAlert.vue";

export default {
    components: {
        appDangerAlert: DangerAlert,
        appSuccessAlert: SuccessAlert
    },
    data() {
        return {
            show: false,
            alertAnimation: "fade",
            load: true,
            elementWidth: 100,
            selectedComponent: "appDangerAlert",
            numbers: [0, 1, 2, 3]
        };
    },
    methods: {
        beforeEnter(el) {
            console.log("beforeEnter");
            this.elementWidth = 100;
            el.style.width = this.elementWidth + "px";
        },
        enter(el, done) {
            console.log("enter");
            let round = 1;
            const interval = setInterval(() => {
                el.style.width = this.elementWidth + round * 10 + "px";
                round++;
                if (round > 20) {
                    clearInterval(interval);
                    done();
                }
            }, 20);
        },
        afterEnter(el) {
            console.log("afterEnter");
        },
        enterCancelled(el) {
            console.log("enterCancelled");
        },

        beforeLeave(el) {
            console.log("beforeLeave");
            this.elementWidth = 300;
            el.style.width = this.elementWidth + "px";
        },
        leave(el, done) {
            console.log("leave");
            let round = 1;
            const interval = setInterval(() => {
                el.style.width = this.elementWidth - round * 10 + "px";
                round++;
                if (round > 20) {
                    clearInterval(interval);
                    done();
                }
            }, 20);
        },
        afterLeave(el) {
            console.log("afterLeave");
        },
        leaveCancelled(el) {
            console.log("leaveCancelled");
        },

        toggleComponent() {
            this.selectedComponent =
                this.selectedComponent === "appDangerAlert"
                    ? "appSuccessAlert"
                    : "appDangerAlert";
        },
        addItem() {
            const pos = Math.floor(Math.random() * this.numbers.length);
            this.numbers.splice(pos, 0, Math.max(...this.numbers) + 1);
        },
        removeItem(idx) {
            this.numbers.splice(idx, 1);
        }
    }
};
</script>

<style>
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 1s;
}
.fade-leave {
    /* opacity: 1; */
}
.fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
}

.slide-enter {
    opacity: 0;
}
.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
}
@keyframes slide-in {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(20px);
    }
}

.slide-move {
    transition: transform 1s;
}
</style>

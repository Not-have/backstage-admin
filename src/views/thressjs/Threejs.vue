<!--
 * @Description(说明): thress.js 的demo
 * 参考博客：https://mp.weixin.qq.com/s/I65Agd6LnTlOP2JbC7kqOQ
-->
<template>
    <div ref="container" id="container"></div>
</template>
<script>
import * as THREE from "three"; //引入Threejs
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { onMounted } from 'vue';
export default {
    name: 'Threejs',
    components: {
        
    },
    setup() {
        let hotPoints = [
            {
                position: {
                    x: 0,
                    y: 0,
                    z: -0.2
                },
                detail: {
                    "title": "信息点1"
                }
            },
            {
                position: {
                    x: -0.2,
                    y: -0.05,
                    z: 0.2
                },
                detail: {
                    "title": "信息点2"
                }
            }
        ];

        let scene, camera, renderer;


        function initThree() {
            //场景
            scene = new THREE.Scene();

            //镜头
            camera = new THREE.PerspectiveCamera(90, document.body.clientWidth / document.body.clientHeight, 0.1, 100);
            camera.position.set(0, 0, 0.01);

            //渲染器
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(document.body.clientWidth, document.body.clientHeight);

            document.getElementById("container").appendChild(renderer.domElement);

            //镜头控制器
            let controls = new OrbitControls(camera, renderer.domElement);

            // useSphere();
            useBox();

            initPoints();

            //一会儿在这里添加3D物体
            loop();
        }
        // 根据左右上下前后的顺序构建六个面的材质集
        function useBox() {
            let materials = [];
            const scene_left = require("@/assets/images/scene_left.jpeg");
            let texture_left = new THREE.TextureLoader().load(scene_left);
            materials.push(new THREE.MeshBasicMaterial({ map: texture_left }));

            const scene_right = require("@/assets/images/scene_right.jpeg");
            let texture_right = new THREE.TextureLoader().load(scene_right);
            materials.push(new THREE.MeshBasicMaterial({ map: texture_right }));

            const scene_top = require("@/assets/images/scene_top.jpeg");
            let texture_top = new THREE.TextureLoader().load(scene_top);
            materials.push(new THREE.MeshBasicMaterial({ map: texture_top }));

            const scene_bottom = require("@/assets/images/scene_bottom.jpeg");
            let texture_bottom = new THREE.TextureLoader().load(scene_bottom);
            materials.push(new THREE.MeshBasicMaterial({ map: texture_bottom }));

            const scene_front = require("@/assets/images/scene_front.jpeg");
            let texture_front = new THREE.TextureLoader().load(scene_front);
            materials.push(new THREE.MeshBasicMaterial({ map: texture_front }));

            const scene_back = require("@/assets/images/scene_back.jpeg");
            let texture_back = new THREE.TextureLoader().load(scene_back);
            materials.push(new THREE.MeshBasicMaterial({ map: texture_back }));

            let box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), materials);
            box.geometry.scale(1, 1, -1);
            scene.add(box);
        }

        function useSphere() {
            let sphereGeometry = new THREE.SphereGeometry(1, 50, 50);
            sphereGeometry.scale(1, 1, -1);
            // sphereGeometry.rotateY(180*Math.PI/180);
            const scene = require("@/assets/images/scene.jpeg");
            let texture = new THREE.TextureLoader().load(scene);
            let sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });

            // let sphereGeometry = new THREE.SphereGeometry(50, 20, 20);

            let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
            // sphere.material.wireframe  = true;
            scene.add(sphere);
        }

        //帧同步重绘
        function loop() {
            requestAnimationFrame(loop);

            renderer.render(scene, camera);
        }
        onMounted(() => {
            initThree();
        })
        function initPoints() {
            const hot = require("@/assets/images/hot.png");
            let pointTexture = new THREE.TextureLoader().load(hot);
            let material = new THREE.SpriteMaterial({ map: pointTexture });

            let poiObjects = [];
            for (let i = 0; i < hotPoints.length; i++) {
                let sprite = new THREE.Sprite(material);
                sprite.scale.set(0.1, 0.1, 0.1);
                sprite.position.set(hotPoints[i].position.x, hotPoints[i].position.y, hotPoints[i].position.z);

                scene.add(sprite);

                sprite.detail = hotPoints[i].detail;
                poiObjects.push(sprite);
            }

            document.querySelector("#container").addEventListener("click", function (event) {
                event.preventDefault();

                let raycaster = new THREE.Raycaster();
                let mouse = new THREE.Vector2();

                mouse.x = (event.clientX / document.body.clientWidth) * 2 - 1;
                mouse.y = - (event.clientY / document.body.clientHeight) * 2 + 1;

                raycaster.setFromCamera(mouse, camera);

                let intersects = raycaster.intersectObjects(poiObjects);
                if (intersects.length > 0) {
                    console.log("点击了热点" + intersects[0].object.detail.title);
                }
            });
        }
    }
}
</script>

<style scoped>
#container{
    height:100%;
    width: 100%;
    overflow: hidden;
}
</style>

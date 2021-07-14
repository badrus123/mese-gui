<template>
    <div id="LayoutSidebar" :class="{'mini' : $store.state.menuVisibility === 'COLLAPSED'}">
        <ul class="list-unstyled components">
            <li :class="{'active' : $route.path === '/'}">
                <router-link to="/">
                    <home-menu-icon :color="$route.path === '/' ? '#EFA0A9' : '#FFF'" class="icon"/>
                    <span class="text">Home</span>
                </router-link>
            </li>
            <li :class="{'active' : $route.path === '/portfolio'}">
                <router-link to="/portfolio">
                    <portfolio-menu-icon :color="$route.path === '/portfolio' ? '#EFA0A9' : '#FFF'" class="icon"/>
                    <span class="text">Portfolio</span>
                </router-link>
            </li>
            <li :class="{'active' : $route.path.includes('/explore')}">
                <router-link to="/explore">
                    <explore-menu-icon :color="$route.path.includes('/explore') ? '#EFA0A9' : '#FFF'" class="icon"/>
                    <span class="text">Explore</span>
                </router-link>
            </li>
            <li :class="{'active' : $route.path === '/wrapped'}">
                <router-link to="/wrapped">
                    <wrapped-menu-icon :color="$route.path === '/wrapped' ? '#EFA0A9' : '#FFF'" class="icon"/>
                    <span class="text">Wrapped</span>
                </router-link>
            </li>
            <li :class="{'active' : $route.path === '/pools'}">
                <router-link to="/pools">
                    <pools-menu-icon :color="$route.path === '/pools' ? '#EFA0A9' : '#FFF'" class="icon"/>
                    <span class="text">Pools</span>
                </router-link>
            </li>
            <li :class="{'active' : $route.path === '/farms'}">
                <router-link to="/farms">
                    <farms-menu-icon :color="$route.path === '/farms' ? '#EFA0A9' : '#FFF'" class="icon"/>
                    <span class="text">Farms</span>
                </router-link>
            </li>
            <li :class="{'active' : $route.path === '/lottery'}">
                <router-link to="/lottery">
                    <lottery-menu-icon :color="$route.path === '/lottery' ? '#EFA0A9' : '#FFF'" class="icon"/>
                    <span class="text">LOTTERY</span>
                </router-link>
            </li>
            <li :class="{'active' : $route.path === '/statistics'}">
                <router-link to="/statistics">
                    <statistic-menu-icon :color="$route.path === '/statistics' ? '#EFA0A9' : '#FFF'" class="icon"/>
                    <span class="text">statistics</span>
                </router-link>
            </li>
            <li :class="{'active' : $route.path === '/help'}">
                <router-link to="/help">
                    <help-menu-icon :color="$route.path === '/help' ? '#EFA0A9' : '#FFF'" class="icon"/>
                    <span class="text">Help</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    watch: {

    },
    methods:{
        goto(to) {
            this.$router.push(to)
        },
    }
}
</script>

<style lang="scss">

#LayoutSidebar {
    background: #5A4F5E;
    z-index: 30;
    color: #FFF !important;
    -webkit-transition: all .3s linear 0s;
    transition: all .3s;
    position: fixed;
    top: 0;
    padding-top: 60px;
    height: 100%;
    width: 200px;
    overflow: hidden;

    ul.components {
        padding: 10px 0;
    }

    ul li a {
        padding: 10px 15px;
        color: #FFF;
        font-size: 1.1em;
        display: block;
        text-decoration: none;
        text-transform: uppercase;
        border-left: 4px solid #5A4F5E;
        position: relative;

        .text {
            transition: visibility .8s;
            position: absolute;
            top:25%;
            margin: auto;
            left:70px;
        }

        .icon {
            width: 25px;
            display: inline;
        }
    }

   ul li.active > a, a[aria-expanded="true"] {
        color: #EFA0A9;
        border-left: 4px solid #EFA0A9;
    }

    ul li a:hover {
        background: #817186;
    }

    ul ul {
        margin-top: -5px;
    }
    ul ul a {
        font-size: 0.9em !important;
        padding-left: 30px !important;
        background: #342C36;
    }

    &.mini {
        width: 65px;
        ul {
            li {
                position: relative;
                a {
                    .text {
                        //position: absolute;
                        //top:10px;
                        //left:50px;
                        //display: block;
                    }

                    img {
                    }
                }
            }
        }

        .dropdown-toggle::after {
            top: 50%;
            position: absolute;
            right: 15px;
            -webkit-transform: translateX(50%);
            -ms-transform: translateX(50%);
            transform: translateX(50%);
        }
    }
}
</style>

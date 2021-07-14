<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" aria-current="page" v-for="(breadcrumb, key, index) in crumbs" :key="key">
                <router-link class="breadcrumb-item-link" :disabled="index == breadcrumb.length" :to="breadcrumb.to">
          <span v-if="key == 0 && list.length === 0" class="icon icon-home">
              <font-awesome-icon icon="home"/>
          </span>
                    <span v-else>{{breadcrumb.name}}</span>
                </router-link>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    computed : {
        crumbs () {
            if(this.list && this.list.length > 0)
                return this.list
            else {
                let metaBread = this.$route.meta.breadcrumb
                if (metaBread != undefined) {
                    let breadcrumbs = [];
                    metaBread.map( (b, i) => {
                        let title = this.$route.query.title
                        let name = b.name
                        let link = b.to
                        if( i == metaBread.length-1 && title != undefined) {
                            name = title
                            link = "?title="+title
                        }
                        breadcrumbs.push({name : name, to : link})
                    })
                    return breadcrumbs
                } else {
                    let pathArray = this.$route.path.split("/")
                    pathArray.shift()
                    let breadcrumbs = [];
                    let tempPath = [];
                    for (let index = 0; index < pathArray.length; index++) {
                        tempPath.push(pathArray[index]);
                        breadcrumbs.push({
                            to: '/'+ tempPath.join("/"),
                            name: pathArray[index],
                        })
                    }

                    return breadcrumbs;
                }
            }
        }
    },
}
</script>

<style lang="scss">
.breadcrumb{
    font-size: 13px;
    text-transform: capitalize;
    background-color: transparent;
    margin-bottom:0px;
    line-height: 10px;
    padding-left: 0;

    &-item {
        align-items: center;
        min-height: 20px;

        + .breadcrumb-item {
            &::before {
                content: url('/images/right-arrow-icon.svg');
                padding-top: 0;
            }
        }

        &:last-of-type {
            span{
                color: #FFF !important;
            }
        }

        &-link {
            font-size: 13px;
            letter-spacing: 1px;
            color: #646464 !important;

            text-decoration: none !important;
            font-style: normal;
            font-weight: normal;

            &:hover {
                color: #ADADAD !important;
            }
        }
    }

    .icon{
        height: 18px;
        width: 18px;
        display: inline-block;
        background-repeat: no-repeat;
        background-color: transparent;
        background-position: 0px 0px;
        background-size: contain;
        margin-bottom: 3px;

        &-home {
            cursor: pointer;
        }
    }
}
</style>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h4>Shadow</h4>
                <p>Elevation is used to specify the separation between surfaces and elements along the z-axis. There are 8 style classes (<mark>shadow-{level}</mark>) to define the elevation layers.</p>

                <div class="grid">
                    <div :class="['box', 'shadow-' + index]" v-for="index in 8" :key="index">
                        shadow-{{index}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.box {
    min-height: 100px;
    min-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin: 2rem;
    border-radius: 4px;
}
</style>
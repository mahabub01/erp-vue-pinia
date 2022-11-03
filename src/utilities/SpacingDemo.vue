<template>
    <div class="grid spacing-demo">
        <div class="col-12">
            <div class="card">
                <h4>Spacing</h4>
                <p><router-link to="grid">PrimeFlex</router-link> provides various spacing utilities to modify
                    an element's layout.</p>

                <h5>Classes</h5>
                <p>The spacing classes use the <i>p-&#123;property&#125;&#123;position&#125;-&#123;value&#125;</i> syntax whereas for responsive
				values <i>&#123;breakpoint&#125;:&#123;property&#125;&#123;position&#125;-&#123;value&#125;</i> format is used.</p>

                <h5>Property</h5>
                <p>Property can either be a margin or a padding.</p>
                <ul>
                    <li><b>m</b>: margin</li>
                    <li><b>p</b>: padding</li>
                </ul>

                <h5>Position</h5>
                <p>Position can either be either of the 4 sides, the x-y axis or blank for the shortand of all sides.</p>
                <ul>
                    <li><b>t</b>: top</li>
                    <li><b>b</b>: bottom</li>
                    <li><b>l</b>: left</li>
                    <li><b>r</b>: right</li>
                    <li><b>x</b>: left and right</li>
                    <li><b>y</b>: top and bottom</li>
                    <li><b>blank</b>: all sides</li>
                </ul>

                <h5>Value</h5>
                <p>Value field varies from 0 to 6 where default value of the <mark>$spacer</mark> is 1rem. The special auto value is used to center elements using auto margins.</p>
                <ul>
                    <li><b>0</b>: $spacer * 0</li>
                    <li><b>1</b>: $spacer * .25</li>
                    <li><b>2</b>: $spacer * .5</li>
                    <li><b>3</b>: $spacer * 1</li>
                    <li><b>4</b>: $spacer * 1.5</li>
                    <li><b>5</b>: $spacer * 2</li>
                    <li><b>6</b>: $spacer * 3</li>
                    <li><b>auto</b>: auto margin</li>
                </ul>

                <h5>Breakpoint</h5>
                <p>Breakpoints define how the spacing should be depending on the screen size.</p>
                <ul>
                    <li><b>sm</b>: small screens e.g. phones</li>
                    <li><b>md</b>: medium screens e.g. tablets</li>
                    <li><b>lg</b>: large screens e.g. notebooks</li>
                    <li><b>xl</b>: larger screens .e.g monitors</li>
                </ul>
            </div>
        </div>

        <div class="col-12 md:col-6">
            <div class="card">
                <h5>Use Case 1</h5>
                <p>Spacing is a handy utility when elements wrap when screen size get smaller. In example below, when buttons wrap
                    they are displayed on top of each other whereas with spacing this issue can easily be resolved.
                </p>

                <h6>Without Spacing</h6>
                <Button type="button" label="Button 1" style="width:20rem" />
                <Button type="button" label="Button 2" style="width:20rem" />

                <h6>With Spacing</h6>
                <Button type="button" label="Button 1" style="width:20rem" class="mr-2 mb-2" />
                <Button type="button" label="Button 2" style="width:20rem" class="mb-2"/>
            </div>
        </div>

        <div class="col-12 md:col-6">
            <div class="card">
                <h5>Use Case 2</h5>
                <p>Spacing utilities also work seamlessly with responsive PrimeFlex grid utilty. Example below demonstrates a case where on a smaller screen inputs receive a margin to position themselves
                    separately in stacked mode, reduce the dimension of the window to view the difference.
                </p>

                <h6>Without Spacing</h6>
                <div class="grid p-formgrid p-fluid">
                    <div class="col-12 lg:col-4">
                        <InputText />
                    </div>
                    <div class="col-12 lg:col-4">
                        <InputText />
                    </div>
                    <div class="col-12 lg:col-4">
                        <InputText />
                    </div>
                </div>

                <h6>With Spacing</h6>
                <div class="grid p-formgrid p-fluid">
                    <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                        <InputText />
                    </div>
                    <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                        <InputText />
                    </div>
                    <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                        <InputText />
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

<style scoped>
.demo-container {
    border: 1px solid var(--surface-d);
}
i:not([class~="pi"]) {
    background-color: var(--surface-b);
    color: var(--primary-color);
    font-family: Monaco, courier, monospace;
    font-style: normal;
    font-size: 12px;
    padding: 2px 4px;
    letter-spacing: .5px;
    border-radius: 3px;
    font-weight: 600;
    margin: 0 2px;
}
</style>

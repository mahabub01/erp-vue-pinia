<template>
<div class="landing-container">
    <div id="header" class="section flex flex-column">
        <div class="header-menu-container flex align-items-center justify-content-between">
            <a class="layout-topbar-logo" href="/">
                <img src="layout/images/logo2x.png" alt="ultima-layout" style="height: 24px">
            </a>

            <a id="menu-button" href="#" class="lg:hidden" @click="onMenuButtonClick($event)">
                <i class="pi pi-bars fs-xlarge"></i>
            </a>
            <ul ref="menu" id="menu">
                <li><a class="flex p-3">Home</a></li>
                <li><a @click="smoothScroll('#header')" class="flex p-3">Introduction</a></li>
                <li><a @click="smoothScroll('#features')" class="flex p-3">Features</a></li>
                <li><a @click="smoothScroll('#promotion')" class="flex p-3">Promotion</a></li>
                <li><a @click="smoothScroll('#pricing')" class="flex p-3">Pricing</a></li>
                <li><a @click="smoothScroll('#video')" class="flex pl-3 py-3">Video</a></li>
            </ul>
        </div>

        <div class="header-text flex flex-column align-items-center justify-content-center">
            <h1 class="mb-6 white-color">Your application slogan comes here</h1>
            <Button type="button" label="Sign Up Now" class="p-button-secondary"></Button>
        </div>
    </div>

    <div id="features" class="section flex flex-column align-items-center">
        <h2>The Ultimate Material Application Template for PrimeVue</h2>
        <p class="text-center">PrimeVue is a collection of rich UI components for Angular. PrimeVue is developed by PrimeTek Informatics, a vendor with years of expertise in developing open source UI solutions.
            Allocate your valuable time on business logic rather than dealing with the complex user interface requirements.
        </p>

        <div class="grid mt-3 mx-0">
            <div class="col-12 md:col-4 text-center">
                <h3>Creative</h3>
                <Button type="button" class="feature-button p-button-rounded p-button-plain p-button-text p-button p-component p-button-icon-only">
                    <span class="p-button-icon pi pi-pencil fs-xlarge" aria-hidden="true"></span>
                    <span aria-hidden="true" class="p-button-label">&amp;nbsp;</span>
                </button>
            </div>
            <div class="col-12 md:col-4 text-center">
                <h3>Responsive</h3>
                <Button type="button" class="feature-button p-button-rounded p-button-plain p-button-text p-button p-component p-button-icon-only">
                    <span class="p-button-icon pi pi-mobile fs-xlarge" aria-hidden="true"></span>
                    <span aria-hidden="true" class="p-button-label">&amp;nbsp;</span>
                </button>
            </div>
            <div class="col-12 md:col-4 text-center">
                <h3>Cross Browser</h3>
                <Button type="button" class="feature-button p-button-rounded p-button-plain p-button-text p-button p-component p-button-icon-only">
                    <span class="p-button-icon pi pi-upload fs-xlarge" aria-hidden="true"></span>
                    <span aria-hidden="true" class="p-button-label">&amp;nbsp;</span>
                </button>
            </div>

            <div class="col-12 md:col-4 text-center">
                <Button type="button" class="feature-button p-button-rounded p-button-plain p-button-text p-button p-component p-button-icon-only">
                    <span class="p-button-icon pi pi-tag fs-xlarge" aria-hidden="true"></span>
                    <span aria-hidden="true" class="p-button-label">&amp;nbsp;</span>
                </button>
                <h3>Well Organized</h3>
            </div>
            <div class="col-12 md:col-4 text-center">
                <Button type="button" class="feature-button p-button-rounded p-button-plain p-button-text p-button p-component p-button-icon-only">
                    <span class="p-button-icon pi pi-palette fs-xlarge" aria-hidden="true"></span>
                    <span aria-hidden="true" class="p-button-label">&amp;nbsp;</span>
                </button>
                <h3>Beautiful</h3>
            </div>
            <div class="col-12 md:col-4 text-center">
                <Button type="button" class="feature-button p-button-rounded p-button-plain p-button-text p-button p-component p-button-icon-only">
                    <span class="p-button-icon pi pi-check-circle fs-xlarge" aria-hidden="true"></span>
                    <span aria-hidden="true" class="p-button-label">&amp;nbsp;</span>
                </button>
                <h3>Just For you</h3>
            </div>
        </div>
    </div>

    <div id="promotion" class="flex flex-column align-items-center">
        <div class="grid m-0 py-3 xl:pl-6">
            <div class="col-12 lg:col-8 flex flex-column justify-content-center align-items-center xl:align-items-center pl-6">
                <h1 class="white-color">Boost Your Productivity.</h1>
                <Button type="button" class="p-button-raised p-button p-compBnent">
                    <span class="p-button-label">Sign Up Now</span>
                </button>
            </div>
            <div class="col-12 lg:col-4">
                <div class="card mt-3 mb-0">
                    <h3>Just</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab perferendis nesciunt ad reiciendis
                        explicabo consequatur sapiente odit ipsa harum illum</p>
                </div>

                <div class="card mt-3 mb-0">
                    <h3>Like</h3>
                    <p>Ab perferendis nesciunt ad reiciendis explicabo consequatur sapiente odit ipsa harum illum</p>
                </div>

                <div class="card my-3">
                    <h3>That</h3>
                    <p>Necessitatibus quaerat voluptates aspernatur iure, aperiam possimus sint sit mollitia! </p>
                </div>
            </div>
        </div>
    </div>

    <div id="pricing" class="section flex flex-column align-items-center">
        <h2>Pricing</h2>
        <p>Esse delectus sit velit, aspernatur voluptates molestiae, enim recusandae. Odit dicta, maiores quas ad
            nesciunt, illum expedita veritatis illo quam odio id!</p>

        <div class="grid m-0 pricing-content">
            <div class="col-12 xl:col-4">
                <div class="card p-0">
                    <div class="flex flex-column align-items-center indigo-bgcolor white-color p-6 fs-large">
                        <span>BASIC</span>
                        <h1 class="font-bold">$5</h1>
                        <span>Monthly</span>
                    </div>
                    <ul class="options">
                        <li><i class="pi pi-check"></i><span>Responsive</span></li>
                        <li><i class="pi pi-check"></i><span>Push Messages</span></li>
                    </ul>
                </div>
            </div>
            <div class="col-12 xl:col-4">
                <div class="card p-0">
                    <div class="flex flex-column align-items-center pink-bgcolor white-color p-6 fs-large">
                        <span>STANDARD</span>
                        <h1 class="font-bold">$25</h1>
                        <span>Monthly</span>
                    </div>
                    <ul class="options">
                        <li><i class="pi pi-check"></i><span>Responsive</span></li>
                        <li><i class="pi pi-check"></i><span>Push Messages</span></li>
                        <li><i class="pi pi-check"></i><span>7/24 Support</span></li>
                        <li><i class="pi pi-check"></i><span>Free Shipping</span></li>
                    </ul>
                </div>
            </div>
            <div class="col-12 xl:col-4 pricing-box pricing-professional">
                <div class="card p-0">
                    <div class="flex flex-column align-items-center cyan-bgcolor white-color p-6 fs-large">
                        <span>PROFESSIONAL</span>
                        <h1 class="font-bold">$50</h1>
                        <span>Monthly</span>
                    </div>
                    <ul class="options">
                        <li><i class="pi pi-check"></i><span>Responsive</span></li>
                        <li><i class="pi pi-check"></i><span>Push Messages</span></li>
                        <li><i class="pi pi-check"></i><span>7/24 Support</span></li>
                        <li><i class="pi pi-check"></i><span>Free Shipping</span></li>
                        <li><i class="pi pi-check"></i><span>Unlimited Bandwidth</span></li>
                        <li><i class="pi pi-check"></i><span>Unlimited Storage</span></li>
                        <li><i class="pi pi-check"></i><span>Gift Cards</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div id="video" class="section flex flex-column align-items-center justify-content-center">
        <h2>Video</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
        <div class="m-3">
            <iframe src="https://www.youtube.com/embed/B_lYGUtCd0g" frameborder="0" class="videoFrame"></iframe>
        </div>
    </div>

    <div id="footer" class="section flex align-items-center justify-content-between flex-column lg:flex-row">
        <p>PrimeVue ULTIMA</p>

        <div class="py-3 flex align-items-center">
            <ul class="my-3 mx-6">
                <li><a href="#mobile">Promotion</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#video">Video</a></li>
            </ul>
            <ul class="my-3 ml-3">
                <li><a href="#">Home</a></li>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#features">Features</a></li>
            </ul>
        </div>
    </div>
</div>

</template>

<script>
export default {
    data() {
        return {
            isMenuActive: false
        }
    },
    methods:  {
        onMenuButtonClick(e) {
            let menu = document.getElementById('menu');

            if (this.isMenuActive) {
                this.addClass(menu, 'fadeOutUp');
                this.isMenuActive = false;
            }
            else {
                this.addClass(menu, 'menu-active fadeInDown');
                this.isMenuActive = true;
            }
            e.preventDefault();
        },

        smoothScroll(id){
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth'
            });
        },

        addClass(element, classNames) {
            let classNamesArr = classNames.split(' ');
            for (var i = 0; i < classNamesArr.length; i++) {
                let className = classNamesArr[i];
                if (element.classList)
                    element.classList.add(className);
                else
                    element.className += ' ' + className;
            }
        },

        removeClass(element, classNames) {
            let classNamesArr = classNames.split(' ');
            for (var i = 0; i < classNamesArr.length; i++) {
                let className = classNamesArr[i];
                if (element.classList)
                    element.classList.remove(className);
                else
                    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.videoFrame{
    width: 560px;
    height: 300px;
    
    @media screen and (max-width: 960px) {
        width: 300px;
    }
}
</style>
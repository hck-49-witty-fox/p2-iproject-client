<template>

    <SlideBar/>

    <!-- HEADER -->
    <HeaderBar/>

    <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <!-- Main page content-->
                    <div class="container-xl px-4 mt-5">
                        <!-- Custom page header alternative example-->
                        <div class="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row mb-4">
                            <div class="me-4 mb-3 mb-sm-0">
                                <h1 class="mb-0">Dashboard</h1>
                                <div class="small">
                                    <span class="fw-500 text-primary">Friday</span>
                                    &middot; September 20, 2021 &middot; 12:16 PM
                                </div>
                            </div>
                            <!-- Date range picker example-->
                            <div class="input-group input-group-joined border-0 shadow" style="width: 16.5rem">
                                <span class="input-group-text"><i data-feather="calendar"></i></span>
                                <input class="form-control ps-0 pointer" id="litepickerRangePlugin" placeholder="Select date range..." />
                            </div>
                        </div>
                        <!-- Illustration dashboard card example-->
                        <div class="card card-waves mb-4 mt-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center justify-content-between">
                                    <div class="col">
                                        <h2 class="text-dark">Welcome to MOVIEMAIN</h2>
                                        <p class="text-gray-700">Here you can find and book the best movie ever created</p>
                                        <a class="btn btn-dark p-3">
                                            Get Started
                                            <i class="ms-1" data-feather="arrow-right"></i>
                                        </a>
                                    </div>
                                    <div class="col d-none d-lg-block mt-xxl-n4"><img class="img-fluid px-xl-4 mt-xxl-n5" src="https://img.freepik.com/free-photo/empty-cinema-auditorium-with-chairs_651396-2891.jpg?w=1480&t=st=1663208659~exp=1663209259~hmac=6f93e4ecdd99b08d1851560abcb6123c8c5b6d6c650ca801af7bd1b84247c718" style="width:1000px"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
</template>

<script>
    import HeaderBar from '../components/HeaderBar.vue';
import SlideBar from '../components/SlideBar.vue';

    export default {
        components: { HeaderBar, SlideBar },
    };
</script>
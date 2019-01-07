<template>
    <div class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link class="navbar-brand" to="/">Stock Trader</router-link>
                </div>
                <div class="collapse navbar-collapse" id="header-navbar">
                    <ul class="nav navbar-nav">
                        <router-link tag="li" active-class="active" to="/portfolio"><a>Portfolio</a></router-link>
                        <router-link tag="li" active-class="active" to="/stocks"><a>Stocks</a></router-link>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">End Day</a></li>
                        <li class="dropdown">
                            <a 
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Save &amp; Load<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a>Save</a></li>
                                <li><a>Load</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

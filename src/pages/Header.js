import React, { Component } from 'react';
class Header extends Component {
render(){
return (
<div>

<header>
	<div class="container">
		
		<nav class="top_nav d-flex pt-4">
			<h1>
				<a class="navbar-brand" href="/Home">Interior Decor
				</a>
			</h1>
			
			<div class="w3ls_right_nav ml-auto d-flex">
				
				<form class="nav-search form-inline my-0 form-control" action="#" method="post">
					<input class="form-control" type="search" placeholder="Search" aria-label="Search" required=""/>
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
				
				<div class="nav-icon d-flex">
					
					<a class="text-white login_btn align-self-center mx-md-3" href="#myModal_btn" data-toggle="modal" data-target="#myModal_btn">
						<i class="far fa-user"></i>
					</a>
					
				</div>
			</div>
		</nav>
		
		<nav class="navbar navbar-expand-lg navbar-light justify-content-center">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mx-auto text-center">
					<li class="nav-item">
						<a class="nav-link  active" href="/">Home
							<span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link scroll" href="/">About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link scroll" href="/">Furniture</a>
					</li>
					<li class="nav-item">
						<a class="nav-link scroll" href="/">Pricing</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/products" Link to ="/products">Products Page</a>
					</li>
					<li class="nav-item">
						<a class="nav-link scroll" href="/">Team</a>
					</li>
					<li class="nav-item">
						<a class="nav-link scroll" href="/">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
		
	</div>
	
</header>

</div>






)



}











}
export default  Header
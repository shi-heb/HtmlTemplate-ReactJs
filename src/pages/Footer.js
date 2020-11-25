import React, { Component } from 'react';
class Footer extends Component {
render(){
return (

<footer class="py-5 bg-light">
	<div class="container py-md-3">
		<div class="row footer-grids">
			<div class="col-lg-3 col-md-6">
				<h4 class="mb-4">Contatc Us</h4>
				<p> <span class="fas mr-2 fa-map-marker"></span> 1234 block, Charlotte, North Carolina, United States</p>
				<p class="my-2"><span class="fas mr-2 fa-envelope-open"></span> <a href="mailto:info@example.com">info@example.com</a></p>
				<p><span class="fas mr-2 fa-phone-volume"></span> +12 534894364</p>
			</div>
			<div class="col-lg-3 mt-md-0 mt-5 col-md-6">
				<h4 class="mb-4">Company links</h4>
				<p><a href="/">Terms and Conditions</a></p>
				<p><a href="/">Privacy Policy</a></p>
				<p><a href="/">License Aggrement</a></p>
			</div>
			<div class="col-lg-6 mt-lg-0 mt-5 brands">
				<h4 class="mb-4">Our Partners</h4>
				<ul>
					<li><img src="assets/images/brand1.png" class="img-fluid" alt="" /></li>
					<li><img src="assets/images/brand2.png" class="img-fluid" alt="" /></li>
					<li><img src="assets/images/brand3.png" class="img-fluid" alt="" /></li>
					<li><img src="assets/images/brand4.png" class="img-fluid" alt="" /></li>
				</ul>
			</div>
		</div>
		<div class="text-center mt-5 pt-4 copyright">
			<p class="">© 2018 Interior Decor. All rights reserved | Design by
			<a href="http://w3layouts.com"> W3layouts.</a>
		</p>
		</div>
	</div>
</footer>


)}}
export default Footer
<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	import Login from "./pages/Login.svelte";
	import PatientForm from "./pages/PatientForm.svelte";
	export let url: string = "";
</script>

<Router url="{url}">
	<Route path="/" component={PatientForm} />
	<Route path="/doctors/login"><Login/></Route>
</Router>

<style>
	@font-face {
		font-family: 'IBM Plex Sans Thai';
		src: url("/fonts/IBMPlexSansThai-Medium.woff") format("woff");
		font-style: 400;
	}
</style>
<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	import Login from "./pages/Login.svelte";
	export let url: string = "";
</script>

<Router url="{url}">
	<Route path="/"><Login/></Route>
</Router>

<style scoped>
</style>
const Nav = {
    render() {
        return `
        <nav class="navbar navbar-expand-lg container px-5">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                    <a class="nav-link text-reset fw-bold" data-navigo href="#/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-reset fw-bold" data-navigo href="#/blog">Blog</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-reset fw-bold" data-navigo href="#/project">Project</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-reset fw-bold" data-navigo href="#/admin">Edit</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
                
        
        `
    }
}
export default Nav
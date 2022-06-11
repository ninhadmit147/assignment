const navAdmin = {
    render() {
        return `
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
            <a class="navbar-brand fw-bold bg-dark px-3 py-1 text-white rounded-pill" href="#">Admin</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" data-navigo aria-current="page" href="/admin/user">User</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active"  data-navigo aria-current="page" href="/admin/posts">Post</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active"  data-navigo aria-current="page" href="/admin/blogs">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active"  data-navigo aria-current="page" href="/admin/projects">Project</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-primary text-decoration-underline" data-navigo aria-current="page" href="/">Out</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        `
    }
}
export default navAdmin
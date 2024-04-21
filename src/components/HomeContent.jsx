export default function HomeContent({ data }) {

    return (
        <>

            <section id="about" className="about">
                <div className="container">

                    <div className="section-title">
                        <h2>Контент</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    {data.map((item, idx) => {
                        return <div className="row" key={idx}>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <img src={item.src} alt={item.alt}  className="img-fluid" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                    {item.text}
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                </ul>   
                            </div>

                        </div>

                    })}





                </div>


            </section>
        </>
    )

}
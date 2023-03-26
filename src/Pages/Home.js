import React, { useState, useRef } from "react";
import Navbar from "../Components/template/Navbar"
import Footer from "../Components/template/Footer"

const Home = () => {
    const [getNavbarValue, setNavbarValue] = useState("");

    const changeNavbarValue = () => {
        return setNavbarValue("My Contact");
    };

    const linkRef = useRef(null);

    const goto = (ref) => {
        window.scrollTo({
            top:ref.offsetTop,
            left:0,
            behavior:'smooth'
        })
    }

    return (
        <div>
            <Navbar title={"AVA"} newValue={getNavbarValue}/>
                <div onClick={() => goto(linkRef.current)}>
                    <p>Klik Akuuuu</p>
                </div>
                <div>
                    <h1>ini adalah halaman Home</h1>
                    <button onClick={() => changeNavbarValue()}></button>
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque. Vero assumenda ut, similique aperiam, in nesciunt quia ex ipsa repudiandae ducimus sit cum dolore, corrupti voluptatum! Modi enim illum ratione voluptatem inventore officia fugiat sit architecto eligendi provident commodi quasi amet voluptas vero aliquam odit nesciunt quis, impedit quidem maiores a expedita. Distinctio totam inventore magni eaque quibusdam, repellat ex neque veniam dolore veritatis temporibus, sequi, enim sed eveniet quas earum. Dolores culpa neque voluptas voluptatum. Aut sed ipsam ad tempora animi iure nesciunt. Maxime, autem temporibus ratione incidunt quas exercitationem dignissimos molestiae recusandae, laboriosam, explicabo pariatur sint consequuntur.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque. Vero assumenda ut, similique aperiam, in nesciunt quia ex ipsa repudiandae ducimus sit cum dolore, corrupti voluptatum! Modi enim illum ratione voluptatem inventore officia fugiat sit architecto eligendi provident commodi quasi amet voluptas vero aliquam odit nesciunt quis, impedit quidem maiores a expedita. Distinctio totam inventore magni eaque quibusdam, repellat ex neque veniam dolore veritatis temporibus, sequi, enim sed eveniet quas earum. Dolores culpa neque voluptas voluptatum. Aut sed ipsam ad tempora animi iure nesciunt. Maxime, autem temporibus ratione incidunt quas exercitationem dignissimos molestiae recusandae, laboriosam, explicabo pariatur sint consequuntur.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque. Vero assumenda ut, similique aperiam, in nesciunt quia ex ipsa repudiandae ducimus sit cum dolore, corrupti voluptatum! Modi enim illum ratione voluptatem inventore officia fugiat sit architecto eligendi provident commodi quasi amet voluptas vero aliquam odit nesciunt quis, impedit quidem maiores a expedita. Distinctio totam inventore magni eaque quibusdam, repellat ex neque veniam dolore veritatis temporibus, sequi, enim sed eveniet quas earum. Dolores culpa neque voluptas voluptatum. Aut sed ipsam ad tempora animi iure nesciunt. Maxime, autem temporibus ratione incidunt quas exercitationem dignissimos molestiae recusandae, laboriosam, explicabo pariatur sint consequuntur.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque. Vero assumenda ut, similique aperiam, in nesciunt quia ex ipsa repudiandae ducimus sit cum dolore, corrupti voluptatum! Modi enim illum ratione voluptatem inventore officia fugiat sit architecto eligendi provident commodi quasi amet voluptas vero aliquam odit nesciunt quis, impedit quidem maiores a expedita. Distinctio totam inventore magni eaque quibusdam, repellat ex neque veniam dolore veritatis temporibus, sequi, enim sed eveniet quas earum. Dolores culpa neque voluptas voluptatum. Aut sed ipsam ad tempora animi iure nesciunt. Maxime, autem temporibus ratione incidunt quas exercitationem dignissimos molestiae recusandae, laboriosam, explicabo pariatur sint consequuntur.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque. Vero assumenda ut, similique aperiam, in nesciunt quia ex ipsa repudiandae ducimus sit cum dolore, corrupti voluptatum! Modi enim illum ratione voluptatem inventore officia fugiat sit architecto eligendi provident commodi quasi amet voluptas vero aliquam odit nesciunt quis, impedit quidem maiores a expedita. Distinctio totam inventore magni eaque quibusdam, repellat ex neque veniam dolore veritatis temporibus, sequi, enim sed eveniet quas earum. Dolores culpa neque voluptas voluptatum. Aut sed ipsam ad tempora animi iure nesciunt. Maxime, autem temporibus ratione incidunt quas exercitationem dignissimos molestiae recusandae, laboriosam, explicabo pariatur sint consequuntur.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque. Vero assumenda ut, similique aperiam, in nesciunt quia ex ipsa repudiandae ducimus sit cum dolore, corrupti voluptatum! Modi enim illum ratione voluptatem inventore officia fugiat sit architecto eligendi provident commodi quasi amet voluptas vero aliquam odit nesciunt quis, impedit quidem maiores a expedita. Distinctio totam inventore magni eaque quibusdam, repellat ex neque veniam dolore veritatis temporibus, sequi, enim sed eveniet quas earum. Dolores culpa neque voluptas voluptatum. Aut sed ipsam ad tempora animi iure nesciunt. Maxime, autem temporibus ratione incidunt quas exercitationem dignissimos molestiae recusandae, laboriosam, explicabo pariatur sint consequuntur.</div>
                <a className="App-Link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ref={linkRef}>Learn React</a>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque. Vero assumenda ut, similique aperiam, in nesciunt quia ex ipsa repudiandae ducimus sit cum dolore, corrupti voluptatum! Modi enim illum ratione voluptatem inventore officia fugiat sit architecto eligendi provident commodi quasi amet voluptas vero aliquam odit nesciunt quis, impedit quidem maiores a expedita. Distinctio totam inventore magni eaque quibusdam, repellat ex neque veniam dolore veritatis temporibus, sequi, enim sed eveniet quas earum. Dolores culpa neque voluptas voluptatum. Aut sed ipsam ad tempora animi iure nesciunt. Maxime, autem temporibus ratione incidunt quas exercitationem dignissimos molestiae recusandae, laboriosam, explicabo pariatur sint consequuntur.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque. Vero assumenda ut, similique aperiam, in nesciunt quia ex ipsa repudiandae ducimus sit cum dolore, corrupti voluptatum! Modi enim illum ratione voluptatem inventore officia fugiat sit architecto eligendi provident commodi quasi amet voluptas vero aliquam odit nesciunt quis, impedit quidem maiores a expedita. Distinctio totam inventore magni eaque quibusdam, repellat ex neque veniam dolore veritatis temporibus, sequi, enim sed eveniet quas earum. Dolores culpa neque voluptas voluptatum. Aut sed ipsam ad tempora animi iure nesciunt. Maxime, autem temporibus ratione incidunt quas exercitationem dignissimos molestiae recusandae, laboriosam, explicabo pariatur sint consequuntur.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque. Vero assumenda ut, similique aperiam, in nesciunt quia ex ipsa repudiandae ducimus sit cum dolore, corrupti voluptatum! Modi enim illum ratione voluptatem inventore officia fugiat sit architecto eligendi provident commodi quasi amet voluptas vero aliquam odit nesciunt quis, impedit quidem maiores a expedita. Distinctio totam inventore magni eaque quibusdam, repellat ex neque veniam dolore veritatis temporibus, sequi, enim sed eveniet quas earum. Dolores culpa neque voluptas voluptatum. Aut sed ipsam ad tempora animi iure nesciunt. Maxime, autem temporibus ratione incidunt quas exercitationem dignissimos molestiae recusandae, laboriosam, explicabo pariatur sint consequuntur.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque. Vero assumenda ut, similique aperiam, in nesciunt quia ex ipsa repudiandae ducimus sit cum dolore, corrupti voluptatum! Modi enim illum ratione voluptatem inventore officia fugiat sit architecto eligendi provident commodi quasi amet voluptas vero aliquam odit nesciunt quis, impedit quidem maiores a expedita. Distinctio totam inventore magni eaque quibusdam, repellat ex neque veniam dolore veritatis temporibus, sequi, enim sed eveniet quas earum. Dolores culpa neque voluptas voluptatum. Aut sed ipsam ad tempora animi iure nesciunt. Maxime, autem temporibus ratione incidunt quas exercitationem dignissimos molestiae recusandae, laboriosam, explicabo pariatur sint consequuntur.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque. Vero assumenda ut, similique aperiam, in nesciunt quia ex ipsa repudiandae ducimus sit cum dolore, corrupti voluptatum! Modi enim illum ratione voluptatem inventore officia fugiat sit architecto eligendi provident commodi quasi amet voluptas vero aliquam odit nesciunt quis, impedit quidem maiores a expedita. Distinctio totam inventore magni eaque quibusdam, repellat ex neque veniam dolore veritatis temporibus, sequi, enim sed eveniet quas earum. Dolores culpa neque voluptas voluptatum. Aut sed ipsam ad tempora animi iure nesciunt. Maxime, autem temporibus ratione incidunt quas exercitationem dignissimos molestiae recusandae, laboriosam, explicabo pariatur sint consequuntur.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque. Vero assumenda ut, similique aperiam, in nesciunt quia ex ipsa repudiandae ducimus sit cum dolore, corrupti voluptatum! Modi enim illum ratione voluptatem inventore officia fugiat sit architecto eligendi provident commodi quasi amet voluptas vero aliquam odit nesciunt quis, impedit quidem maiores a expedita. Distinctio totam inventore magni eaque quibusdam, repellat ex neque veniam dolore veritatis temporibus, sequi, enim sed eveniet quas earum. Dolores culpa neque voluptas voluptatum. Aut sed ipsam ad tempora animi iure nesciunt. Maxime, autem temporibus ratione incidunt quas exercitationem dignissimos molestiae recusandae, laboriosam, explicabo pariatur sint consequuntur.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque. Vero assumenda ut, similique aperiam, in nesciunt quia ex ipsa repudiandae ducimus sit cum dolore, corrupti voluptatum! Modi enim illum ratione voluptatem inventore officia fugiat sit architecto eligendi provident commodi quasi amet voluptas vero aliquam odit nesciunt quis, impedit quidem maiores a expedita. Distinctio totam inventore magni eaque quibusdam, repellat ex neque veniam dolore veritatis temporibus, sequi, enim sed eveniet quas earum. Dolores culpa neque voluptas voluptatum. Aut sed ipsam ad tempora animi iure nesciunt. Maxime, autem temporibus ratione incidunt quas exercitationem dignissimos molestiae recusandae, laboriosam, explicabo pariatur sint consequuntur.</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque. Vero assumenda ut, similique aperiam, in nesciunt quia ex ipsa repudiandae ducimus sit cum dolore, corrupti voluptatum! Modi enim illum ratione voluptatem inventore officia fugiat sit architecto eligendi provident commodi quasi amet voluptas vero aliquam odit nesciunt quis, impedit quidem maiores a expedita. Distinctio totam inventore magni eaque quibusdam, repellat ex neque veniam dolore veritatis temporibus, sequi, enim sed eveniet quas earum. Dolores culpa neque voluptas voluptatum. Aut sed ipsam ad tempora animi iure nesciunt. Maxime, autem temporibus ratione incidunt quas exercitationem dignissimos molestiae recusandae, laboriosam, explicabo pariatur sint consequuntur.</div>
            <Footer year={"2023"}/>
        </div>
    )
}

export default Home;
import Email from "./vectors/Email";
import Established from "./vectors/Established";
import Website from './vectors/Website';
import Phone from './vectors/Phone';
import Message from './vectors/Message';
import Location from './vectors/Location';

export default function Card({ data }) {
    return (
        <div key={data.id} className="card">
            <h2 className="team-title">{data["team-full"]}</h2>
            <p className="team-des">{data["constituency-description"]}</p>
            <p class="website">
                <Website />
                <a href={data.website}>{data.website}</a>
            </p>
            <div className="body-bottom">
                <div className="section-1-holder">
                    <div class="email">
                        <Email />
                        <p>{data.email}</p>
                    </div>

                    <div class="phone">
                        <Phone />
                        <p>{data.phone}</p>
                    </div>
                </div>

                <div className="section-2-holder">

                    <div className="address">
                        <Location />
                        <p>{data.address}</p>
                    </div>

                    <div className="established">
                        <Established />
                        <p>{data.establishment}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

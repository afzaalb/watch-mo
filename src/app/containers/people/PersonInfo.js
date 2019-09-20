import React, { Fragment } from "react";
import { Calendar,User,Lightning,Link } from 'react-bytesize-icons';
import { IMDBPeople } from "../../../constants";

const PersonInfo = ({name,gender,bio,bornIn,bornOn,known,imdb,home}) => {
    return (
        <aside className="person-info-card white-card mw-100 mh-100 d-flex flex-column flex-1-1-a">
            <h1 className="bold mb-3 tracking-tight">{name}</h1>
            <p title={`Gender: ${gender == 2 ? 'Male' : 'Female'}`}>
                <User className="align-top mr-2" width="18" height="18" strokeWidth="2" />
                <span>{gender == 2 ? 'Male' : 'Female'}</span>
            </p>
            <p title={`${name} is known for ${known}`}>
                <Lightning className="align-top mr-2" width="18" height="18" strokeWidth="2" />
                <span>{`Known for ${known}`}</span>
            </p>
            {bornOn != null &&
                <p title={`Born in ${bornIn}, on ${bornOn}.`}>
        			<Calendar className="align-top mr-2" width="18" height="18" strokeWidth="2" />
        			<span>{`Birthday ${bornOn}`}</span>
        		</p>
            }
            {(bio != null && bio != '') &&
                <Fragment>
                    <p className="bold mb-2">Bio</p>
                    <p>{bio}</p>
                </Fragment>
            }
            {home &&
                <p>
                    <a
            			target="_blank"
            			href={home}
            			title={`View ${name} Official site.`}>
                			<Link className="align-top mr-2" width="18" height="18" strokeWidth="2" />
                			<span>View official site</span>
                    </a>
                </p>
            }
            {imdb && <a
    			target="_blank"
                className="mt-auto"
    			href={IMDB_TITLEPeople + `${imdb}`}
    			title={`View ${name} on IMDB.`}>
    			<Link className="align-top mr-2" width="18" height="18" strokeWidth="2" />
    			<span>View on IMDB</span>
    		</a>}
        </aside>
    )
}

export default PersonInfo;
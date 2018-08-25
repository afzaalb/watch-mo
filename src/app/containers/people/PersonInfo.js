import React, { Fragment } from "react";
import { Calendar, UserIcon, ILightning, ILink, IMDBPeople } from "../../../constants";

const PersonInfo = ({name,gender,bio,bornIn,bornOn,known,imdb,home}) => {
    return (
        <aside className="person-info-card white-card mw-100 mh-100 d-flex flex-column flex-1-1-a">
            <h2 className="bold mb-3">{name}</h2>
            <p title={`Gender: ${gender == 2 ? 'Male' : 'Female'}`}>
                {UserIcon}
                <span>{gender == 2 ? 'Male' : 'Female'}</span>
            </p>
            <p title={`${name} is known for ${known}`}>
                {ILightning}
                <span>{`Known for ${known}`}</span>
            </p>
            {bornOn != null &&
                <p title={`Born in ${bornIn}, on ${bornOn}.`}>
        			{Calendar}
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
                			{ILink}
                			<span>View official site</span>
                    </a>
                </p>
            }
            {imdb && <a
    			target="_blank"
                className="mt-auto"
    			href={IMDBPeople + `${imdb}`}
    			title={`View ${name} on IMDB.`}>
    			{ILink}
    			<span>View on IMDB</span>
    		</a>}
        </aside>
    )
}

export default PersonInfo;
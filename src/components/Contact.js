import React from 'react'
import "./Contact.css"

const state = true;

export default function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/women/71.jpg" alt="Anita Sutton" />
            <div className="name">
                <h4>Anita Sutton</h4>
                {state ?
                    <div className="status">
                        <div className="status-online" />
                        <div className="status-text">
                            Online
                        </div>
                    </div>
                    :
                    <div className="status">
                        <div className="status-offline" />
                        <div className="status-text">
                            Offline
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import { general } from '../../../actions';
import moment from "moment";
import {profilePhoto} from "../../../core/helpers/Utils";

export default class View extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            event: {},
            user: {}
        };
    }

    componentDidMount() {
        general(
            { proposal: this.props.params.proposal },
            ({ data }) => this.setState({ ...data }),
            (e) => console.error(e)
        );
    }

    birthday() {
        return moment(new Date())
            .diff(moment(this.state.user.birth_date, "DD.MM.YYYY"), "years");
    }

    back() {
        window.history.back();
    }

    render() {
        return (
            <div class="event-view">
                <Partials.EventCover
                    category={this.state.event.category || {}}
                    title={this.state.event.name}
                />
                <div className="wrapper actions-wrapper">
                    <div className="inner-wrapper clear">
                        <div className="event-info">
                            <div className="heading-2">{this.state.event.name}</div>
                            <div className="description">{this.state.description}</div>
                            <div className="buttons clear">
                                <a onClick={this.back.bind(this)} href="javascript:void()" className="decline">Ablehnen</a>
                                <Link to={`/event/${this.props.params.proposal}/request`} className="violet-button accept">Annehmen</Link>
                            </div>
                        </div>
                        <div className="user-avatar" style={{ backgroundImage: `url('${profilePhoto(this.state.user)}')` }}>
                            <i className="star" data-count="5"/>
                        </div>
                        <div className="user-info">
                            <div className="ttl">
                                Profilinformationen
                            </div>
                            <p>
                                <span className="text-bold">{this.state.user.first_name}</span>, {this.birthday()} Jahre, Aus Gießen
                            </p>
                            <p>
                                <span className="text-bold">Sprachen</span>: Englisch, Deutsch
                            </p>
                            <Link to={`/profile/${this.state.user.id}/information`} className="btn more-info">
                                Mehr über Bernd erfahren
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="details-wrapper wrapper clear">
                    <div className="ttl">Eventdaten</div>
                    <div className="event-date">
                        <div className="heading-2">
                            Ich, ein Anfang
                        </div>
                        <div className="description">
                            Postcards have been consistently one of the more popular collectibles and used as
                            promotional materials…
                        </div>
                    </div>
                    <div className="event-details">
                        <span>{this.state.event.destination}</span>
                        <span>{this.state.event.date}</span>
                        <span>{this.state.price}€</span>
                    </div>
                </div>
            </div>
        );
    }
}

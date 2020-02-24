import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DeckStatusLabel from './DeckStatusLabel';

class DeckRow extends React.Component {
    constructor() {
        super();

        this.handleDeckClick = this.handleDeckClick.bind(this);
    }

    handleDeckClick() {
        if(this.props.onSelect) {
            this.props.onSelect(this.props.deck);
        }
    }

    render() {
        const { deck } = this.props;

        return (
            <div className={ this.props.active ? 'deck-row active' : 'deck-row' } key={ this.props.deck.name } onClick={ this.props.onClick }>
                <div className='col-xs-1 deck-image'><img className='deck-sm-mon' src={ '/img/mons/' + this.props.deck.faction.value + '.png' } /></div>
                <span className='col-xs-9 col-md-9 col-lg-10 deck-name'>
                    <span>{ this.props.deck.name }</span>
                    <DeckStatusLabel className='pull-right text-shadow' status={ this.props.deck.status } />
                </span>
                <div className='row small'>
                    <span className='col-md-7 deck-factionalliance'>{ this.props.deck.faction.name }{ this.props.deck.alliance && this.props.deck.alliance.name ? <span>/{ this.props.deck.alliance.name }</span> : null }</span>
                    <span className='col-xs-4 col-md-3 deck-date text-right pull-right'>{ moment(this.props.deck.lastUpdated).format('Do MMM YYYY') }</span>
                </div>
            </div>);
    }
}

DeckRow.displayName = 'DeckRow';
DeckRow.propTypes = {
    active: PropTypes.bool,
    deck: PropTypes.object.isRequired,
    onSelect: PropTypes.func
};

export default DeckRow;

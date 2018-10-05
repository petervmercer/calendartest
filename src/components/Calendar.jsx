import React from "react";
import dateFns from "date-fns";
import styled from 'styled-components';
import AppIconDiv from './icondiv';

const MonthHeader = styled.div`    
    border-bottom: 1px solid #eee;
    background: #fff;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    
`;

const MonthLeft = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
    justify-content: flex-start;
    text-align: left;
`;

const MonthRight = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
    justify-content: flex-end;
    text-align: right;
`;

const MonthDate = styled.div`
flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
    justify-content: center;
    text-align: center;

`;


class Calendar extends React.Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    renderHeader() {
        const dateFormat = "MMMM YYYY";

        return (
            <MonthHeader>
                <MonthLeft >
                    <AppIconDiv onClick={this.prevMonth}>
                        chevron_left
                    </AppIconDiv>
                </MonthLeft>
                <MonthDate >
                    <span>
                    {dateFns.format(this.state.currentMonth, dateFormat)}
                    </span>
                </MonthDate>
                <MonthRight >
                    <AppIconDiv onClick={this.nextMonth}>chevron_right</AppIconDiv>
                </MonthRight>
            </MonthHeader>
        );
    }

    renderDays() {
        const dateFormat = "dddd";
        const days = [];
        let startDate = dateFns.startOfWeek(this.state.currentMonth);
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    }

    renderCells() {
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "D";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                        className={`col cell ${
                            !dateFns.isSameMonth(day, monthStart)
                                ? "disabled"
                                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                            }`}
                        key={day}
                        onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                    >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }

    onDateClick = day => {
        this.setState(
            {selectedDate:day}
        );
    };

    nextMonth = () => {
        this.setState({currentMonth: dateFns.addMonths(this.state.currentMonth, 1)});
    };

    prevMonth = () => {
        this.setState({currentMonth: dateFns.subMonths(this.state.currentMonth, 1)});
    };

    render() {
        return (
            <div className="calendar">
                {this.renderHeader()}

            </div>
        );
    }
}

/*

{this.renderDays()}
                {this.renderCells()}
 */
export default Calendar;
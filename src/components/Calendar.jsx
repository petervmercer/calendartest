import React from "react";
import dateFns from "date-fns";
import styled, {css} from 'styled-components';
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
    
    text-transform: uppercase;
    font-weight: 700;
    font-size: 115%;
    padding: 1.5em 0;
    border-bottom: 1px solid #eee;
    
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

const CalendarDiv = styled.div`
display: block;
    position: relative;
    width: 100%;
    background: #fff;
    border: 1px solid #eee;
`;

const DayBox = styled.div`
flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
    justify-content: center;
    text-align: center;
`;

const DayRow = styled.div`
text-transform: uppercase;
    font-weight: 400;
    color: #ccc;
    font-size: 70%;
    padding: .75em 0;
    border-bottom: 1px solid #eee;
    
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const CellMain = styled.div`

    flex-grow: 0;
    flex-basis: calc(100% / 7);
    width: calc(100% / 7);
    
    position: relative;
    height: 5em;
    border-right: 1px solid var#eee;
    overflow: hidden;
    cursor: pointer;
    background: #fff;
    transition: 0.25s ease-out;
    
    &:hover {
        BigDateNum{
            background: #f9f9f9;
            transition: 0.5s ease-out;        
        }       
    }
    
    
    &::last-child {
    border-right: none;
    }
    
    ${props => props.disabled && css`
        color: #ccc;
        pointer-events: none;
    `}
    
    ${props => props.selected && css`
        border-left: 10px solid transparent;
        border-image: linear-gradient(45deg, #1a8fff 0%, #53cbf1 40%);
        border-image-slice: 1;
        BigDateNum{
            background: #f9f9f9;
            transition: 0.5s ease-out;        
        }  
    `}

`;

const DateNum = styled.span`
     position: absolute;
    font-size: 82.5%;
    line-height: 1;
    top: .75em;
    right: .75em;
    font-weight: 700;
`;

const BigDateNum = styled.span`
    font-weight: 700;
    line-height: 1;
    color: #1a8fff;
    opacity: 0;
    font-size: 8em;
    position: absolute;
    top: -.2em;
    right: -.05em;
    transition: .25s ease-out;
    letter-spacing: -.07em;
`;

const DateRow = styled.div`
margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 1px solid #eee;
    &:last-child {
    border-bottom: none;
}
`




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
                <DayBox key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </DayBox>
            );
        }
        return <DayRow>{days}</DayRow>;
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

                    <CellMain

                        disabled={!dateFns.isSameMonth(day, monthStart)}
                        selected={dateFns.isSameDay(day, selectedDate)}
                        key={day}
                        onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                    >
                        <dateNum>{formattedDate}</dateNum>
                        <BigDateNum>{formattedDate}</BigDateNum>

                    </CellMain>

                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <DateRow key={day}>
                    {days}
                </DateRow>
            );
            days = [];
        }
        return <div>{rows}</div>;
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
            <CalendarDiv>
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}

            </CalendarDiv>
        );
    }
}

/*




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



 */
export default Calendar;
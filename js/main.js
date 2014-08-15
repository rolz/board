/** @jsx React.DOM */


var HeatBoardNotes = React.createClass({
    render: function() {
        var createNote = function(noteText) {
            return (
                <li>
                    <a>
                        <p>{noteText}</p>
                    </a>
                </li>
            );
    };
    return <ul>{this.props.notes.map(createNote)}</ul>;
  }
});


var HeatBoardApp = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function() {
        return {boards: [], notes: [], note:""};
    },
    componentWillMount: function() {
        var firebaseRef = new Firebase("https://intense-heat-2042.firebaseio.com/board/");
        this.bindAsArray(firebaseRef, "notes");
    },
    render: function() {
        return (
          <div>
            <h3>HeatSperation Board</h3>
            <HeatBoardNotes notes={this.state.notes} />
          </div>
        );
    }
});

//Render React

React.renderComponent(
    <HeatBoardApp />,
    document.getElementById('content')
);

import React from "react";

class Search extends React.Component {
    state = {
        search: "",
        type: "all",
    };
    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };
    handelFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };
    render() {
        return (
            <div className="row">
                <div className="input-field ">
                    <input
                        placeholder="search"
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className="btn search-btn"
                        onClick={() =>
                            this.props.searchMovies(
                                this.state.search,
                                this.state.type
                            )
                        }
                    >
                        Search
                    </button>
                    <div>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="all"
                                onChange={this.handelFilter}
                                cheked={this.state.type === "all"}
                            />
                            <span>all</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="movie"
                                onChange={this.handelFilter}
                                cheked={this.state.type === "movie"}
                            />
                            <span>Movie only</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type="series"
                                onChange={this.handelFilter}
                                cheked={this.state.type === "series"}
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}
export { Search };

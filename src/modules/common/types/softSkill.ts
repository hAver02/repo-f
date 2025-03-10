import React from "react";

export interface SoftSkill {
    id:        string;
    name:      string;
    content:   string;
    icon:      React.ReactElement;
    active:    boolean;
    createdAt: Date;
}